import { ID } from "../class/ID";
import { User } from "../class/User";

export interface UserRepository {
    save(user: User): Promise<void>;
    get(userID : ID): Promise<User>
}
