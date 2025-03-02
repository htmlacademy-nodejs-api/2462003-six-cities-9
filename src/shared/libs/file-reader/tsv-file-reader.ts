import { readFileSync } from 'node:fs';

import { FileReader } from './file-reader.interface.js';
import { Coordinates, HousingType, Offer } from '../../types/offer.js';
import { User } from '../../types/user.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor (
    private readonly fileName: string
  ) {}

  private validateRawData(): void {
    if (! this.rawData) {
      throw new Error('File was not read');
    }
  }

  private parseRawDataToOffers(): Offer[] {
    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => this.parseLineToOffer(line));
  }

  private parseLineToOffer(line: string): Offer {
    const [
      title,
      description,
      publishDate,
      city,
      previewImage,
      images,
      isPremium,
      isFavorite,
      rating,
      type,
      rooms,
      guests,
      price,
      amenities,
      name,
      email,
      avatar,
      password,
      userType,
      commentsCount,
      coordinates,
    ] = line.split('\t');

    return {
      title,
      description,
      publishDate: new Date(publishDate),
      city,
      previewImage,
      images: this.parseImages(images),
      isPremium: this.parseZeroOreOne(isPremium),
      isFavorite: this.parseZeroOreOne(isFavorite),
      rating: this.parseRating(rating),
      type: this.parseType(type),
      rooms: parseInt(rooms, 10),
      guests: parseInt(guests, 10),
      price: parseInt(price, 10),
      amenities: this.parseAmenities(amenities),
      author: this.parseAuthor(name,
        email,
        avatar,
        password,
        userType,),
      commentsCount: parseInt(commentsCount, 10),
      coordinates: this.parseCoordinates(coordinates)
    };
  }

  private parseImages(images: string): string[] {
    return images.split(';');
  }

  private parseZeroOreOne(zeroOreOne: string): boolean {
    return zeroOreOne === '1';
  }

  private parseRating(rating: string): number {
    return parseFloat(rating);
  }

  private parseType(type: string): HousingType {
    switch (type.trim().toLowerCase()) {
      case 'apartments':
      case 'apartment':
        return 'apartment';
      case 'houses':
      case 'house':
        return 'house';
      case 'rooms':
      case 'room':
        return 'room';
      case 'hotels':
      case 'hotel':
        return 'hotel';
      default:
        throw new Error(`Unknown housing type: ${type}`);
    }
  }

  private parseAmenities(amenities: string): string[] {
    return amenities.split(';');
  }

  private parseAuthor(name: string, email: string, avatar: string, password: string, userType: string): User {
    return {name, email, avatar, password, userType};
  }

  private parseCoordinates(coordinates: string): Coordinates {
    const [lat, long] = coordinates.split(';');
    const latitude = parseFloat(lat);
    const longitude = parseFloat(long);
    return {latitude, longitude};
  }

  public read(): Offer[] {
    this.rawData = readFileSync(this.fileName, {encoding: 'utf-8'});
    return this.parseRawDataToOffers();
  }

  public toArray(): Offer[] {
    this.validateRawData();
    return this.parseRawDataToOffers();
  }
}
