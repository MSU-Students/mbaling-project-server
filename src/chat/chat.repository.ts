import { ChatDto } from './chat.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ChatDto)
export class ChatRepository extends Repository<ChatDto>{
    
}
