const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { env } = require('../config/env');

const ALGORITHM = 'aes-256-gcm';
const KEY = crypto.createHash('sha256').update(String(env.APP_SECRET)).digest();

/**
 * Criptografa dados usando AES-256-GCM
 * @param {string|object} data
 * @returns {string} string codificada contendo iv:tag:ciphertext
 */
function encrypt(data) {
  if (data === null || data === undefined || data === '') return null;
  const text = typeof data === 'object' ? JSON.stringify(data) : String(data);
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const tag = cipher.getAuthTag().toString('hex');
  return `${iv.toString('hex')}:${tag}:${encrypted}`;
}

/**
 * Descriptografa uma string encriptada com encrypt()
 * @param {string} encryptedPayload
 * @returns {any}
 */
function decrypt(encryptedPayload) {
  if (!encryptedPayload) return null;
  try {
    const parts = encryptedPayload.split(':');
    if (parts.length !== 3) return null;
    const [ivHex, tagHex, encryptedHex] = parts;
    const iv = Buffer.from(ivHex, 'hex');
    const tag = Buffer.from(tagHex, 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
    decipher.setAuthTag(tag);
    let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    try {
      return JSON.parse(decrypted);
    } catch {
      return decrypted;
    }
  } catch (err) {
    return null;
  }
}

/**
 * Gera hash de senha com bcrypt
 * @param {string} password
 * @returns {Promise<string>}
 */
async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

/**
 * Compara senha com hash bcrypt
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}

/**
 * Gera um token aleatório seguro (ex: para monitor push)
 * @param {number} [length=32]
 * @returns {string}
 */
function generateToken(length = 32) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

/**
 * Mascara campos sensíveis para retorno seguro no frontend
 * @param {string} str
 * @returns {string}
 */
function maskSecret(str) {
  if (!str) return '';
  const s = String(str);
  if (s.length <= 6) return '******';
  return s.slice(0, 3) + '***' + s.slice(-3);
}

module.exports = {
  encrypt,
  decrypt,
  hashPassword,
  comparePassword,
  generateToken,
  maskSecret
};
