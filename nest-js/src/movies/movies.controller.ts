import { Controller, Get, Param, Delete, Post, Patch, Body, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get('search')
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Get(':id')
    getOne(@Param('id') movieId: string){
        return `This will return one movies with the id: ${movieId}`;
    }

    @Post()
    create(@Body() data){
        return data
    }

    @Delete(':id')
    remove(@Param('id') movieId: string){
        return `This will delete a movie with the id : ${movieId}`
    }

    @Patch(':id')
    path(@Param('id') movieId: string, @Body() updateData){
        return{
            updateMovie: movieId,
            ...updateData,
        }
    }
}
