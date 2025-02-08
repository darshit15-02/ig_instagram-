import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IgRequest } from '../instagram/lg.entity';
import { igdl } from 'btch-downloader';

@Injectable()
export class IgService {
  constructor(
    @InjectRepository(IgRequest)
    private readonly logRequestRepository: Repository<IgRequest>,
  ) {}

  async instagramMedia(url: string) {
    // console.log(url);
    
    try {
      return await igdl(url);
      // console.log(data);
      
   
      // if (!data) {
      //   throw new HttpException('Invalid Instagram URL', HttpStatus.BAD_REQUEST);
      // }

      // const downloadUrl = data && data[0]?.url;
      
      // if (!downloadUrl) {
      //   throw new HttpException('Download URL not found in the response', HttpStatus.BAD_REQUEST);
      // }
      // // Log request to the database
      // const log = this.logRequestRepository.create({
      //   url,
      //   downloadPathURL: downloadUrl ,
      // });
      // console.log(log,"log");
      // await this.logRequestRepository.save(log);


      // return data;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to download media',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getMediaDetails(id: string) {
    // console.log(id);
    try {
      const mediaDetails = await this.logRequestRepository.findOneBy({id:id});
// console.log(mediaDetails,"this is services");

      if (!mediaDetails) {
        throw new HttpException('Media not found', HttpStatus.NOT_FOUND);
      }

      return mediaDetails;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to retrieve media details',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
