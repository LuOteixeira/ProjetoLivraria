import { Pool } from 'pg';

const connectionString = 'postgresql://back_postgree_sql_user:hg43QcRvJgJxi0tz5Peso2n8vTBhK3hf@dpg-ct6cn8popnds73deuam0-a/back_postgree_sql';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;