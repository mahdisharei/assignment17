const students = [
    {
        name: 'Davina J Eskew',
        gender: 'female',
        age: 61,
        courses: ['math', 'bio']
    },
    {
        name: 'Jordan M Johnson',
        gender: 'male',
        age: 67,
        courses: ['math', 'chemistry']
    },
    {
        name: 'James G Carmona',
        gender: 'male',
        age: 25,
        courses: ['bio', 'computer']
    },
    {
        name: 'Orville S Schuyler',
        gender: 'male',
        age: 59,
        courses: ['computer', 'bio']
    },
    {
        name: 'Monica H Hill',
        gender: 'female',
        age: 37,
        courses: ['computer', 'math', 'chemistry']
    },
    {
        name: 'Zachary J Hawkins',
        gender: 'male',
        age: 34,
        courses: ['bio']
    },
    {
        name: 'Elizabeth J Mercer',
        gender: 'female',
        age: 12,
        courses: []
    },
]

// دانش‌آموزانی که سنشون کمتر از ۵۰ ساله و شیمی خوندن
const a = students.filter((person) => {
    return person.age < 50 && person.courses.includes('chemistry')
});
console.log(a)

// دانش آموزانی که مرد هستن و ریاضی خوندن
const b = students.filter((person) => {
    return person.gender === 'male' && person.courses.includes('math')
});
console.log(b)

// دانش‌آموزانی که سنشون بیشتر از ۴۰ ساله، کامپیوتر خوندن ولی ریاضی نخوندن
const c = students.filter((person) => {
    return person.age > 40 && person.courses.includes('computer') && !person.courses.includes('math')
});
console.log(c)

// دانش آموزانی که هیچی نخوندن
const d = students.filter((person) => {
    return person.courses.every ((item) => {})  
});
console.log(d)

// آیا توی لیست دانش‌آموزان، دانش‌آموزی داریم که اسمش الیزابت باشه؟
const e = students.some ((person) => {
    return person.name === 'Elizabeth J Mercer'
});
console.log(e)

// آیا توی لیست دانش‌آموزان، دانش‌آموزی رو داریم که سنش بیشتر از ۶۰ باشه و مرد باشه؟
const f = students.some ((person) => {
    return person.age > 60 && person.gender === 'male'
});
console.log(f)

// درس‌هایی رو که تمام دانش‌آموزان خانوم دارن میخونن رو لیست کنین
const list =[]
const g = students.forEach((person) => {
    if (person.gender === 'female') {
        list.push(person.courses)
    }
});
console.log(list)

// دانش‌آموزان رو بر اساس سنشون از کم به زیاد مرتب کنید
const list2 = []
const h = students.sort((a, b) => a.age - b.age)
console.log(h)
