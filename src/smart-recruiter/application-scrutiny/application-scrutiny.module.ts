import { Module } from "@nestjs/common";
import { ApplicationScrutinyService } from "./application-scrutiny.service";
import { ApplicationScrutinyController } from "./application-scrutiny.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Resume } from "src/entity/Resume";
import { Resume_attachments } from "src/entity/Resume_attachements";

@Module({
  imports: [TypeOrmModule.forFeature([Resume, Resume_attachments])],
  providers: [ApplicationScrutinyService],
  controllers: [ApplicationScrutinyController],
})
export class ApplicationScrutinyModule {}
