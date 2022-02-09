import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class MapEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public mapData: string;
}

export default MapEntity;
