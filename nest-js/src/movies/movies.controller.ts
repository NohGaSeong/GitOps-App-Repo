import { Controller, Get, Param, Delete, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param('id') movieId: string){
        return `This will return one movies with the id: ${movieId}`;
    }

    @Post("/:id")
    craete(){
        return 'This will create a movie'
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return `This will delete a movie with the id : ${movieId}`
    }

    @Patch('/:id')
    path(@Param('id') movieId: string){
        return `this wll patch a movie with the id : ${movieId}`
    }

}
