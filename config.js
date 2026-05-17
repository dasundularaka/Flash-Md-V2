import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

function parsePrefixes(prefixStr) {
  if (!prefixStr || prefixStr.trim() === '' || prefixStr.toLowerCase() === 'none') return []
  return prefixStr.split(',').map(p => p.trim()).filter(Boolean)
}

function parseBoolean(value) {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'on' || value.toLowerCase() === 'true' || value === '1'
  }
  return Boolean(value)
}

function parseLids(lidStr) {
  if (!lidStr || lidStr.trim() === '') return []
  return lidStr.split(',').map(l => l.trim()).filter(Boolean)
}

const CONFIG = {
  MODE: process.env.MODE || 'public',
  PREFIXES: parsePrefixes(process.env.PREFIXES),
  PORT: parseInt(process.env.PORT) || 3000,
  SESSION: process.env.SESSION || null,
  TZ: process.env.TZ || 'Asia/Colombo',
  ANTICALL: parseBoolean(process.env.ANTICALL || 'off'),
  ANTIDELETE: parseBoolean(process.env.ANTIDELETE || 'on'),
  ANTIEDIT: parseBoolean(process.env.ANTIEDIT || 'on'),
  AUTO_READ: parseBoolean(process.env.AUTO_READ || 'off'),
  AUTO_VIEW: parseBoolean(process.env.AUTO_VIEW || 'on'),
  AUTO_LIKE: parseBoolean(process.env.AUTO_LIKE || 'off'),
  DM_PRESENCE: process.env.DM_PRESENCE || 'available',
  GRP_PRESENCE: process.env.GRP_PRESENCE || 'available',
  USER_LID: parseLids(process.env.USER_LID || '253377703313593'),
  OWNER_NUMBER: process.env.OWNER_NUMBER || '94765714446',
  OWNER_NAME: process.env.OWNER_NAME || 'Dasun Dularaka',
  BOT_NAME: process.env.BOT_NAME || 'Flash-Md-V3',
  BOT_VERSION: process.env.BOT_VERSION || '3.0.0'
}

export default CONFIG
