import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661887615347 implements MigrationInterface {
    name = 'default1661887615347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rooms_subjects" ("room_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_cd696c52a33b73af6f5eb3dd757" PRIMARY KEY ("room_id", "subject_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a2f27e9b47651776cda2f8325c" ON "rooms_subjects" ("room_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_5e0d966524fcddfa89ccd4911b" ON "rooms_subjects" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "rooms_subjects" ADD CONSTRAINT "FK_a2f27e9b47651776cda2f8325c2" FOREIGN KEY ("room_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "rooms_subjects" ADD CONSTRAINT "FK_5e0d966524fcddfa89ccd4911b3" FOREIGN KEY ("subject_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms_subjects" DROP CONSTRAINT "FK_5e0d966524fcddfa89ccd4911b3"`);
        await queryRunner.query(`ALTER TABLE "rooms_subjects" DROP CONSTRAINT "FK_a2f27e9b47651776cda2f8325c2"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5e0d966524fcddfa89ccd4911b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2f27e9b47651776cda2f8325c"`);
        await queryRunner.query(`DROP TABLE "rooms_subjects"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
