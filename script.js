let data = JSON.parse(localStorage.getItem('data'))

let filters =[]

if (data == undefined) {
    data = [
        {
            "id": 1,
            "company": "Photosnap",
            "logo": "./images/photosnap.svg",
            "new": true,
            "featured": true,
            "position": "Senior Frontend Developer",
            "role": "Frontend",
            "level": "Senior",
            "postedAt": "1d ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 2,
            "company": "Manage",
            "logo": "./images/manage.svg",
            "new": true,
            "featured": true,
            "position": "Fullstack Developer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1d ago",
            "contract": "Part Time",
            "location": "Remote",
            "languages": ["Python"],
            "tools": ["React"]
        },
        {
            "id": 3,
            "company": "Account",
            "logo": "./images/account.svg",
            "new": true,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2d ago",
            "contract": "Part Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        },
        {
            "id": 4,
            "company": "MyHome",
            "logo": "./images/myhome.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "5d ago",
            "contract": "Contract",
            "location": "USA Only",
            "languages": ["CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 5,
            "company": "Loop Studios",
            "logo": "./images/loop-studios.svg",
            "new": false,
            "featured": false,
            "position": "Software Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Ruby"],
            "tools": ["Sass"]
        },
        {
            "id": 6,
            "company": "FaceIt",
            "logo": "./images/faceit.svg",
            "new": false,
            "featured": false,
            "position": "Junior Backend Developer",
            "role": "Backend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "UK Only",
            "languages": ["Ruby"],
            "tools": ["RoR"]
        },
        {
            "id": 7,
            "company": "Shortly",
            "logo": "./images/shortly.svg",
            "new": false,
            "featured": false,
            "position": "Junior Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
        },
        {
            "id": 8,
            "company": "Insure",
            "logo": "./images/insure.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
        },
        {
            "id": 9,
            "company": "Eyecam Co.",
            "logo": "./images/eyecam-co.svg",
            "new": false,
            "featured": false,
            "position": "Full Stack Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "3w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
        },
        {
            "id": 10,
            "company": "The Air Filter Company",
            "logo": "./images/the-air-filter-company.svg",
            "new": false,
            "featured": false,
            "position": "Front-end Dev",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "1mo ago",
            "contract": "Part Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        }
    ]

    localStorage.setItem('data', JSON.stringify(data))
}

function renderData() {

    document.querySelector('.container').innerHTML=''
    for(const [k,v] of Object.entries(data)){
        let nvim='',fvim ='',fcvim =''
        if(v.new){
            nvim='vim'
        }
        if(v.featured){
            fvim='vim'
            fcvim ='<f-cc></f-cc>'
        }
        let ls =''
        let  subs =v.languages
        subs = subs.concat(v.level)
        subs = subs.concat(v.tools)
        subs = subs.concat(v.role)
        for(const [k,v] of Object.entries(subs)){
            ls +=`<span onclick='add_filter(this.innerText)'>`+v+`</span>`
        }
        let html =`
        <div class="company">
        ${fcvim}
      <div class="lt">
        <img src="`+v.logo+`">
        <div class="ht">
          <div class="tht">
            <span class="c-name">`+v.company+`</span>
            <span class="c-new `+nvim+`">NEW!</span>
            <span class="c-featured `+fvim+`">FEATURED</span>
          </div>
          <h2>`+v.position+`</h2>
          <div class="bht">
            <span>`+v.postedAt+`</span>
            <dot></dot>
            <span>`+v.contract+`</span>
            <dot></dot>
            <span>`+v.location+`</span>
          </div>
          <div class="hl"></div>
        </div>
      </div>
      <div class="rt">
        `+ls+`
      </div>
    </div>
        `
        document.querySelector('.container').insertAdjacentHTML('beforeend',html)
    }

}


function add_filter(f){
    if(filters.includes(f)){
        return
    }
    filters.push(f)
    load_filters()
    filter()
}

function load_filters(){
    if(filters.length == 0){
        document.querySelector('.filter-bar').classList.remove('vop')
    }else{
        let fht =``
        for(const [k,v] of Object.entries(filters)){
            fht+=`<div class="filter">
            <span class="f-t">`+v+`</span>
            <span onclick='remove_filter("`+v+`")' class="btn"><img src="./images/icon-remove.svg"></span>
          </div>`
        }
        document.querySelector('.filters').innerHTML = fht
        document.querySelector('.filter-bar').classList.add('vop')
    }
}

function remove_filter(f){
    let new_filters = []
    for(const [k,v] of Object.entries(filters)){
        if(v !== f){
            new_filters.push(v)
        }
    }
    filters = new_filters
    load_filters()
    filter()

}

function filter(){
    data = JSON.parse(localStorage.getItem('data'))
    let new_data = []
    for(const [k,v] of Object.entries(data)){
        let subs =v.languages
        subs = subs.concat(v.level)
        subs = subs.concat(v.tools)
        subs = subs.concat(v.role)
        let inc =false
        for(const [a,b] of Object.entries(filters)){
            if(subs.includes(b)){
                inc = true
            }else{
                inc = false
                break
            }
        }
        if(inc){
            
            new_data.push(v)
        }
    }
    if(new_data.length === 0){
        new_data = JSON.parse(localStorage.getItem('data'))
    }
    data = new_data
    renderData()
}

function clear_filter(){
    filters = []
    load_filters()
    filter()
}

renderData()
load_filters()