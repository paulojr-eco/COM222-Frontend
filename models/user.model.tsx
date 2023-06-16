import { UUID } from "crypto";
export abstract class UserModel {
  _id: UUID;
  props: Map<string, any>;

  constructor(_id: UUID, props: Map<string, any>) {
    this._id = _id;
    this.props = props;
  }
}
