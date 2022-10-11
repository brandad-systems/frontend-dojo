import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular-boost';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss']
})
export class GraphqlComponent implements OnInit {
  books: Observable<any>;
  authors: Observable<any>;

  booksQuery = gql`
    query books {
      books {
        id
        title
        authorId
      }
    }
  `

  authorsQuery = gql`
    query author {
      authors {
        name
        books {
          title
        }
      }
    }
  `

  addBookMutation = gql`
    mutation addBook($title: String, $authorId: String) {
      addBook(title: $title, authorId: $authorId) {
        id
        title
        authorId
      }
    }
  `

  addAuthorMutation = gql`
    mutation addAuthor($name: String) {
      addAuthor(name: $name) {
        id
        name
      }
    }
  `
    
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.books = this.apollo
      .watchQuery<any>({
        query: this.booksQuery
      })
      .valueChanges.pipe(map(book => book.data))

    this.authors = this.apollo
      .watchQuery<any>({
        query: this.authorsQuery
      })
      .valueChanges.pipe(map(author => author.data))
  }

  addBook() {
    this.apollo
      .mutate({
        mutation: this.addBookMutation,
        variables: {
          title: "Test Title",
          authorId: "1"
        },
        refetchQueries: [{
          query: this.booksQuery
        },{
          query: this.authorsQuery
        }]
      })
      .subscribe()
  }

  addAuthor() {
    this.apollo
      .mutate({
        mutation: this.addAuthorMutation,
        variables: {
          name: "Test Author"
        },
        refetchQueries: [{
          query: this.booksQuery
        },{
          query: this.authorsQuery
        }]
      })
      .subscribe()
  }

}
