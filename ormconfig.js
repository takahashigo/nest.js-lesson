module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  entities: ['./dist/entities/*.entity.js'],
  migrations: ['./dist/migrations/*.js'],
  cli: {
    entitiesDir: './src/entities',
    migrationsDir: './src/migrations',
  },
};

// // https://stackoverflow.com/questions/49618719/why-does-typeorm-need-reflect-metadata
// import 'reflect-metadata';
// import { Item } from 'src/entities/item.entity';
// import { DataSource } from 'typeorm';

// const datasource = new DataSource({
//   type: 'postgres', // これに応じて設定項目が変わる(TypeScriptの型が変わる)
//   host: 'localhost',
//   username: 'postgres',
//   password: 'postgres', // 環境変数より取得
//   port: 5432,
//   logging: true, // SQLログ
//   database: 'postgres',
//   synchronize: true, // DBとのスキーマ同期(開発用)
//   dropSchema: true, // スキーマ削除(開発用)
//   entities: ['dist/entities/*.entity.js'],
//   migrations: ['dist/migrations/*.js'],
//   cli: {
//     entitiesDir: 'src/entities',
//     migrationsDir: 'src/migrations',
//   }, // 利用するエンティティ。パスでの指定も可能
// });

// datasource
//   .initialize()
//   .then(async (ds) => {
//     console.log('datasource is initialized!!');
//     // データベースアクセス処理を記述
//     // ....
//     await datasource.destroy();
//   })
//   .catch((error) => {
//     console.log(error);
//   });
