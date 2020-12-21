// 不使用Promise
http.get('some_url', (result) => {
  console.log(result.id);
});

// 使用Promise
new Promise((resolve) => {
  http.get('some_url', (result) => {
    resolve(result.id)
  })
})
.then((id) => {
  console.log(id);
})

// 不使用promise
http.get('some_url', (id) => {
  http.get('getNameById', id, (name) => {
    http.get('getCourseByName', name, (course) => {
      http.get('getCourseDetailByCourse', course, (data) => {
        // do something
      })
    })
  })
});

// 使用Promise
function getUserId(url) {
  return new Promise((resolve) => {
    http.get(url, (id) => {
      resolve(id);
    })
  })
}

getUserId('some_url')
.then((id) => {
  return getNameById(url, id);
})
.then((name) => {
  return getCourseByName(name);
})
.then((course) => {
  return getCourseDetailByCourse(course);
})
.then((courseDetail) => {
  // do something
})
