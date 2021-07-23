class People {
  constructor(people) {
    this.people = people
  }

  get(id) {
    return this.people.find(person => person.id === id)
  }

  list() {
    return this.people
  }

  toggleIsHired(id) {
    try {
      this.people = this.people.map(person => {
        if (person.id === id) {
          return {
            ...person,
            isHired: !person.isHired,
          }
        }
        
        return person;
      })
      return { success: true }
    } catch (err) {
      throw new Error(err)
    }
  }
  setIsHiredAll() {
    this.people = this.people.map(person => ({
      ...person,
      isHired: true,
    }))
  }

  setFireAll() {
    this.people = this.people.map(person => ({
      ...person,
      isHired: false,
    }))
  }
}

const people = [
  {
    id: 1,
    name: 'Natalie Hayes',
    address: '1221 Scheuvront Drive Denver, CO 80202',
    isHired: true,
  },
  {
    id: 2,
    name: 'William Edwards',
    address: '4088 Peaceful Lane Cleveland, OH 44110',
    isHired: false,
  },
  {
    id: 3,
    name: 'Michael Wright',
    address: '1751 Old House Drive Delaware, OH 43015',
    isHired: false,
  },
  {
    id: 4,
    name: 'Morris Barrett',
    address: '4291 Gladwell Street Millington, TN 38053',
    isHired: true,
  },
  {
    id: 5,
    name: 'Shawn Moore',
    address: '3462 Coal Road Tannersville, PA 18372',
    isHired: true,
  },
  {
    id: 6,
    name: 'Lori Buswell',
    address: '1974 Lighthouse Drive Springfield, MO 65865',
    isHired: false,
  },
  {
    id: 7,
    name: 'Gerald Williams',
    address: '3597 Williams Lane Wichita, KS 67226',
    isHired: false,
  },
  {
    id: 8,
    name: 'Geraldine Freeman',
    address: '748 Walt Nuzum Farm Road Fairport, NY 14450',
    isHired: false,
  },
  {
    id: 9,
    name: 'Joyce Moorman',
    address: '1369 Cost Avenue College Park, MD 20741',
    isHired: false,
  },
  {
    id: 10,
    name: 'Jesus Corner',
    address: '1622 Cunningham Court Flint, MI 48548',
    isHired: false,
  },
]

module.exports = new People(people);
