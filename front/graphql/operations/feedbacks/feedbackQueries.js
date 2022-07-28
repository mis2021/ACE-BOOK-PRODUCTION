import {gql, useQuery} from '@apollo/client';


export const GET_ALL_FBCATEGORY = gql`
query Data {
  fbCategorys {
    data {
      _id
      name
      description
    }
  }
}
`

export const GET_ALL_FBQUESTION = gql`
query Data {
  fbQuestions {
    data {
      _id
      question
    }
  }
}
`

export const GET_ALL_FBCATQUE = gql`
query Data($id: String, $categoryId: String) {
  fbCategoryQuestions(_id: $id, categoryId: $categoryId) {
    data {
      _id
      category {
        _id
        name
        description
      }
      questions {
        _id
        question
        description
      }
    }
  }
}
`