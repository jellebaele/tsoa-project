// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Response,
  Query,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { UUID, User } from './user';
import { UsersService, UserCreationParams } from './usersService';

interface ValidateErrorJSON {
  message: 'Validation failed';
  details: { [name: string]: unknown };
}

@Route('users')
@Tags('User')
export class UsersController extends Controller {
  /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   * @param userId The user's identifier
   * @param name Provide a username to display
   */
  @Response('404', 'Not found')
  @Get('{userId}')
  public async getUser(@Path() userId: UUID, @Query() name?: string): Promise<User> {
    return new UsersService().get(userId, name);
  }

  /**
   * A very long, verbose, wordy, long-winded, tedious, verbacious, tautological,
   * profuse, expansive, enthusiastic, redundant, flowery, eloquent, articulate,
   * loquacious, garrulous, chatty, extended, babbling description.
   * @summary A concise summary.
   */
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(@Body() requestBody: UserCreationParams): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().create(requestBody);
    return;
  }
}
