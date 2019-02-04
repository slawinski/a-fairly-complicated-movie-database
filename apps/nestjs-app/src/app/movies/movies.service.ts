import { Injectable, HttpException } from '@nestjs/common';
import { MOVIES } from '../mocks/movies.mock';

@Injectable()
export class MoviesService {
  movies = MOVIES;

  getMovies(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.movies);
    });
  }
}
