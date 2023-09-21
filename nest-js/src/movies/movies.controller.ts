import { Controller, Get, Param, Delete, Post, Patch, Body, Query } from '@nestjs/common';

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
    craete(@Body() movieData){
        console.log(movieData)
        return movieData
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
