import { Pool } from 'pg';

const connectionString = 'postgres://cskvfjkn:MVX3kIOsPc5EoI1Ggpip8cABPuXko16O@kesavan.db.elephantsql.com/cskvfjkn';
const db = new Pool({ connectionString });

export default db;