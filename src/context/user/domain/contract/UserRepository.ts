import { User } from "../class/User";

export interface UserRepository {
    save(user: User): Promise<void>;
    update(user: User): Promise<void>;
}
