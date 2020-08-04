import { TestBed } from '@angular/core/testing'

import { PlaceholderService } from './placeholder.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment'

describe('PlaceholderService', () => {
  let httpTestingController: HttpTestingController
  let service: PlaceholderService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(PlaceholderService)

    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.get(PlaceholderService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return albums', () => {
    const mockAlbums = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem'
      }
    ]

    service.getAlbums().subscribe(todos => {
      expect(todos[0].userId).toEqual(mockAlbums[0].userId)
      expect(todos[0].id).toEqual(mockAlbums[0].id)
      expect(todos[0].title).toEqual(mockAlbums[0].title)
    })

    const req = httpTestingController.expectOne(`${environment.base_URL}/albums`)

    expect(req.request.method).toEqual('GET')

    req.flush(mockAlbums)
  })

  it('should return posts', () => {
    const mockPosts = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        body: 'content'
      }
    ]

    service.getPosts().subscribe(todos => {
      expect(todos[0].userId).toEqual(mockPosts[0].userId)
      expect(todos[0].id).toEqual(mockPosts[0].id)
      expect(todos[0].title).toEqual(mockPosts[0].title)
      expect(todos[0].body).toEqual(mockPosts[0].body)
    })

    const req = httpTestingController.expectOne(`${environment.base_URL}/posts`)

    expect(req.request.method).toEqual('GET')

    req.flush(mockPosts)
  })

  it('should return todos', () => {
    const mockTodos = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem'
      }
    ]

    service.getTodos().subscribe(todos => {
      expect(todos[0].userId).toEqual(mockTodos[0].userId)
      expect(todos[0].id).toEqual(mockTodos[0].id)
      expect(todos[0].title).toEqual(mockTodos[0].title)
    })

    const req = httpTestingController.expectOne(`${environment.base_URL}/todos`)

    expect(req.request.method).toEqual('GET')

    req.flush(mockTodos)
  })
})
