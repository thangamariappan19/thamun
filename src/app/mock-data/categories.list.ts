export const customerList: any[] = [
  {
  'status': 'OK',
  'message': 'SUCESSS',
  'data': {
    'content': [
      {
        'categoryId': 'CATA_00002',
        'categoryCode': 'paint',
        'depth': 1,
        'active': true,
        'parentId': null,
        'categories': [],
        'descriptions': [
          {
            'categoryDescriptionId': 'CADE_00002',
            'categoryName': 'رسم',
            'slug': 'paint_ar',
            'language': {
              'languageId': 'ar',
              'code': 'ar',
              'name': 'Arabic',
              'active': true
            }
          },
          {
            'categoryDescriptionId': 'CADE_00001',
            'categoryName': 'Paint',
            'slug': 'paint_en',
            'language': {
              'languageId': 'en',
              'code': 'en',
              'name': 'English',
              'active': true
            }
          }
        ]
      }
    ],
    'pageable': {
      'sort': { 'sorted': false, 'unsorted': true, 'empty': true },
      'pageNumber': 0,
      'pageSize': 1,
      'offset': 0,
      'unpaged': false,
      'paged': true
    },
    'totalPages': 1,
    'totalElements': 1,
    'last': true,
    'sort': { 'sorted': false, 'unsorted': true, 'empty': true },
    'numberOfElements': 1,
    'first': true,
    'size': 1,
    'number': 0,
    'empty': false
  }
}
]