import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref
} from '@typegoose/typegoose';

import { HousingType } from '../../../const.js';
import { UserEntity } from '../user/index.js';
import { Location } from '../../types/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, trim: true })
  public title!: string;

  @prop({ required: true, trim: true })
  public description!: string;

  @prop({ required: true })
  public publishDate!: Date;

  @prop({ required: true, trim: true })
  public city!: string;

  @prop({ required: true, trim: true })
  public previewImage!: string;

  @prop({ type: () => [String], required: true })
  public images!: string[];

  @prop({ required: true, default: false })
  public isPremium!: boolean;

  @prop({ required: true, default: false })
  public isFavorite!: boolean;

  @prop({ required: true, min: 0, max: 5 })
  public rating!: number;

  @prop({ required: true, type: String, enum: HousingType })
  public type!: HousingType;

  @prop({ required: true, min: 1 })
  public rooms!: number;

  @prop({ required: true, min: 1 })
  public guests!: number;

  @prop({ required: true, min: 0 })
  public price!: number;

  @prop({ required: true, })
  public amenities!: string[];

  @prop({ required: true, ref: UserEntity })
  public author!: Ref<UserEntity>;

  @prop({ required: true, default: 0 })
  public commentsCount!: number;

  @prop({ required: true, })
  public coordinates!: Location;
}

export const OfferModel = getModelForClass(OfferEntity);
