import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:OBDTtaEIycxLAyCxuejdhmwqfHwwXJIt@junction.proxy.rlwy.net:44807/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;