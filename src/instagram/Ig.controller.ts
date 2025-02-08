import { Controller, Post, Body, HttpCode, Get, Param, Delete } from '@nestjs/common';
import { IgService } from './Ig.service';


@Controller('instagram')
export class IgController {
  constructor(private readonly instagramService: IgService) {}

  @Post()
  @HttpCode(200)
  async download(@Body('url') url: string) {
    console.log(url,"url controller");
    
    if (!url) {
      throw new Error('URL is required');
    }
//     const result = await this.instagramService.instagramMedia(url);
// console.log(result,"result controller");
    
    return await this.instagramService.instagramMedia(url);;
  }

  @Get(':id')
  @HttpCode(200)
  async getMediaDetails(@Param('id') id: string) {
    console.log(id,"from controller");
    
    if (!id) {
      throw new Error('ID is required');
    }
   const data1 =  await this.instagramService.getMediaDetails(id);
  //  console.log(data1);
   
    return data1
  }

}
