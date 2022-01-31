import { __prod__ } from "./constants"
import { Post } from "./entities/Post"
import { MikroORM } from "@mikro-orm/core"

export default {
  entities: [Post],
  dbName: "redditlite",
  user: "ubuntu",
  password: "ubuntu",
  debug: !__prod__,
  type: "postgresql",
  host: "ec2-13-127-160-191.ap-south-1.compute.amazonaws.com",
} as Parameters<typeof MikroORM.init>[0]
