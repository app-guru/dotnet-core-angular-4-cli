import {
  Column,
  DbHelperModel,
  PrimaryKey,
  Table,
  ColumnConfig
} from 'ng-db-helper';

@Table({ name: 'logger' })
export class TblLogger extends DbHelperModel {
  @PrimaryKey({ autoIncrement: true })
  public Id: string;
  @Column() public Type: string;
  @Column() public Message: string;
  @Column() public MessageData: string = null;
  @Column() public StackData: string = null;
}
