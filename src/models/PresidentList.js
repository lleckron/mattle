export function createPresidents() {
    const presidents = [
        {
            "image": "1stWashington.jpg",
            "name": "George Washington",
            "birthYear": 1732,
            "birthState": "Virginia",
            "war": "No",
            "party": "None"
        },
        {
            "image": "2ndAdams.jpg",
            "name": "John Adams",
            "birthYear": 1735,
            "birthState": "Massachusetts",
            "war": "No",
            "party": "Federalist"
        },
        {
            "image": "3rdJefferson.jpg",
            "name": "Thomas Jefferson",
            "birthYear": 1743,
            "birthState": "Virginia",
            "war": "No",
            "party": "Democratic-Repulican"
        },
        {
            "image": "4thMadison.jpg",
            "name": "James Madison",
            "birthYear": 1751,
            "birthState": "Virginia",
            "war": "Yes (War of 1812)",
            "party": "Democratic-Repulican"
        },
        {
            "image": "5thMonroe.jpg",
            "name": "James Monroe",
            "birthYear": 1758,
            "birthState": "Virginia",
            "war": "No",
            "party": "Democratic-Repulican"
        },
        {
            "image": "6thQuincyAdams.jpg",
            "name": "John Quincy Adams",
            "birthYear": 1767,
            "birthState": "Massachusetts",
            "war": "No",
            "party": "Democratic-Repulican"
        },
        {
            "image": "7thJackson.jpg",
            "name": "Andrew Jackson",
            "birthYear": 1767,
            "birthState": "Carolinas",
            "war": "No",
            "party": "Democratic"
        },
        {
            "image": "8thVanBuren.jpg",
            "name": "Martin Van Buren",
            "birthYear": 1782,
            "birthState": "New York",
            "war": "No",
            "party": "Democratic"
        },
        {
            "image": "9thHenryHarrison.jpg",
            "name": "William Henry Harrison",
            "birthYear": 1773,
            "birthState": "Virginia",
            "war": "No",
            "party": "Whig"
        },
        {
            "image": "10thTyler.jpg",
            "name": "John Tyler",
            "birthYear": 1790,
            "birthState": "Virginia",
            "war": "No",
            "party": "Whig"
        }   /*,
        {
            "image": "",
            "name": "James K. Polk",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Zachary Taylor",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Millard Fillmore",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Franklin Pierce",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "James Buchanan",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Abraham Lincoln",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Andrew Johnson",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Ulysses S. Grant",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Rutherford B. Hayes",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "James Garfield",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Chester A. Arthur",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Grover Cleveland",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Benjamin Harrison",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "William McKinley",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Theodore Roosevelt",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "William H. Taft",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Woodrow Wilson",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Warren G. Harding",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Calvin Coolidge",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Herbert Hoover",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Franklin D. Roosevelt",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Harry S. Truman",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Dwight D. Eisenhower",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "John F. Kennedy",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Lyndon B. Johnson",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Richard M. Nixon",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Gerald R. Ford",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Jimmy Carter",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Ronald Reagan",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "George H.W. Bush",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Bill Clinton",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "George W. Bush",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Barack Obama",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Donald J. Trump",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        },
        {
            "image": "",
            "name": "Joseph R. Biden",
            "birthYear": ,
            "birthState": "",
            "war": "",
            "party": ""
        }   */
    ]
    return presidents
}