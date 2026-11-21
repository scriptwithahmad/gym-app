import {openDatabaseAsync} from 'expo-sqlite';
let db: ReturnType<typeof open> | undefined;
async function open(){const d=await openDatabaseAsync('forge.db');await d.execAsync('PRAGMA journal_mode = WAL; CREATE TABLE IF NOT EXISTS snapshots (id TEXT PRIMARY KEY, data TEXT NOT NULL);');return d;}
const get=()=>db??=open();
export default {async getItem(id:string){return (await (await get()).getFirstAsync<{data:string}>('SELECT data FROM snapshots WHERE id=?',id))?.data??null;},async setItem(id:string,data:string){await (await get()).runAsync('INSERT OR REPLACE INTO snapshots VALUES (?,?)',id,data);},async removeItem(id:string){await (await get()).runAsync('DELETE FROM snapshots WHERE id=?',id);}};
