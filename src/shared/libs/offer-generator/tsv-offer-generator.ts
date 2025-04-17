import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems, getSixRandomItems, getRandomArrayItem } from '../../helpers/index.js';

import dayjs from 'dayjs';


const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;


export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getSixRandomItems<string>(this.mockData.images).join(';');
    const isPremium = getRandomItem<string>(this.mockData.isPremium);
    const isFavorite = getRandomItem<string>(this.mockData.isFavorite);
    const rating = getRandomItem<string>(this.mockData.rating);
    const type = getRandomItem<string>(this.mockData.type);
    const rooms = getRandomItem<string>(this.mockData.rooms);
    const guests = getRandomItem<string>(this.mockData.guests);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const amenities = getRandomItems<string>(this.mockData.amenities).join(';');
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const userType = getRandomItem<string>(this.mockData.userType);
    const commentsCount = getRandomItem<string>(this.mockData.commentsCount);
    const coordinates = getRandomArrayItem<string[]>(this.mockData.coordinates);
    const date = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    return [
      title, description, date, city, previewImage, images,
      isPremium, isFavorite, rating, type, rooms, guests,
      price, amenities, name, email, avatar, userType,
      commentsCount, coordinates
    ].join('\t');
  }
}
