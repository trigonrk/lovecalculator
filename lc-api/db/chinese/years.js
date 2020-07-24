const years = [
    {
        "id_zodiac": 1,
        "year": 1924,
        "start": "05/02/1924",
        "end": "23/01/1925",
        "branch": "Wood Rat"
    },
    {
        "id_zodiac": 2,
        "year": 1925,
        "start": "24/01/1925",
        "end": "12/02/1926",
        "branch": "Wood Ox"
    },
    {
        "id_zodiac": 3,
        "year": 1926,
        "start": "13/02/1926",
        "end": "01/02/1927",
        "branch": "Fire Tiger"
    },
    {
        "id_zodiac": 4,
        "year": 1927,
        "start": "02/02/1927",
        "end": "22/01/1928",
        "branch": "Fire Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 1928,
        "start": "23/01/1928",
        "end": "09/02/1929",
        "branch": "Earth Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 1929,
        "start": "10/02/1929",
        "end": "29/01/1930",
        "branch": "Earth Snake"
    },
    {
        "id_zodiac": 7,
        "year": 1930,
        "start": "30/01/1930",
        "end": "16/02/1931",
        "branch": "Metal Horse"
    },
    {
        "id_zodiac": 8,
        "year": 1931,
        "start": "17/02/1931",
        "end": "05/02/1932",
        "branch": "Metal Goat"
    },
    {
        "id_zodiac": 9,
        "year": 1932,
        "start": "06/02/1932",
        "end": "25/01/1933",
        "branch": "Water Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 1933,
        "start": "26/01/1933",
        "end": "13/02/1934",
        "branch": "Water Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 1934,
        "start": "14/02/1934",
        "end": "03/02/1935",
        "branch": "Wood Dog"
    },
    {
        "id_zodiac": 12,
        "year": 1935,
        "start": "04/02/1935",
        "end": "23/01/1936",
        "branch": "Wood Pig"
    },
    {
        "id_zodiac": 1,
        "year": 1936,
        "start": "24/01/1936",
        "end": "10/02/1937",
        "branch": "Fire Rat"
    },
    {
        "id_zodiac": 2,
        "year": 1937,
        "start": "11/02/1937",
        "end": "30/01/1938",
        "branch": "Fire Ox"
    },
    {
        "id_zodiac": 3,
        "year": 1938,
        "start": "31/01/1938",
        "end": "18/02/1939",
        "branch": "Earth Tiger"
    },
    {
        "id_zodiac": 4,
        "year": 1939,
        "start": "19/02/1939",
        "end": "07/02/1940",
        "branch": "Earth Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 1940,
        "start": "08/02/1940",
        "end": "26/01/1941",
        "branch": "Metal Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 1941,
        "start": "27/01/1941",
        "end": "14/02/1942",
        "branch": "Metal Snake"
    },
    {
        "id_zodiac": 7,
        "year": 1942,
        "start": "15/02/1942",
        "end": "04/02/1943",
        "branch": "Water Horse"
    },
    {
        "id_zodiac": 8,
        "year": 1943,
        "start": "05/02/1943",
        "end": "24/01/1944",
        "branch": "Water Goat"
    },
    {
        "id_zodiac": 9,
        "year": 1944,
        "start": "25/01/1944",
        "end": "12/02/1945",
        "branch": "Wood Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 1945,
        "start": "13/02/1945",
        "end": "01/02/1946",
        "branch": "Wood Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 1946,
        "start": "02/02/1946",
        "end": "21/01/1947",
        "branch": "Fire Dog"
    },
    {
        "id_zodiac": 12,
        "year": 1947,
        "start": "22/01/1947",
        "end": "09/02/1948",
        "branch": "Fire Pig"
    },
    {
        "id_zodiac": 1,
        "year": 1948,
        "start": "10/02/1948",
        "end": "28/01/1949",
        "branch": "Earth Rat"
    },
    {
        "id_zodiac": 2,
        "year": 1949,
        "start": "29/01/1949",
        "end": "16/02/1950",
        "branch": "Earth Ox"
    },
    {
        "id_zodiac": 3,
        "year": 1950,
        "start": "17/02/1950",
        "end": "05/02/1951",
        "branch": "Metal Tiger"
    },
    {
        "id_zodiac": 4,
        "year": 1951,
        "start": "06/02/1951",
        "end": "26/01/1952",
        "branch": "Metal Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 1952,
        "start": "27/01/1952",
        "end": "13/02/1953",
        "branch": "Water Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 1953,
        "start": "14/02/1953",
        "end": "02/02/1954",
        "branch": "Water Snake"
    },
    {
        "id_zodiac": 7,
        "year": 1954,
        "start": "03/02/1954",
        "end": "23/01/1955",
        "branch": "Wood Snake"
    },
    {
        "id_zodiac": 8,
        "year": 1955,
        "start": "24/01/1955",
        "end": "11/02/1956",
        "branch": "Wood Goat"
    },
    {
        "id_zodiac": 9,
        "year": 1956,
        "start": "12/02/1956",
        "end": "30/01/1957",
        "branch": "Fire Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 1957,
        "start": "31/01/1957",
        "end": "17/02/1958",
        "branch": "Fire Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 1958,
        "start": "18/02/1958",
        "end": "07/02/1959",
        "branch": "Earth Dog"
    },
    {
        "id_zodiac": 12,
        "year": 1959,
        "start": "08/02/1959",
        "end": "27/01/1960",
        "branch": "Earth Pig"
    },
    {
        "id_zodiac": 1,
        "year": 1960,
        "start": "28/01/1960",
        "end": "14/02/1961",
        "branch": "Metal Rat"
    },
    {
        "id_zodiac": 2,
        "year": 1961,
        "start": "15/02/1961",
        "end": "04/02/1962",
        "branch": "Metal Ox"
    },
    {
        "id_zodiac": 3,
        "year": 1962,
        "start": "05/02/1962",
        "end": "24/01/1963",
        "branch": "Water Tiger"
    },
    {
        "id_zodiac": 4,
        "year": 1963,
        "start": "25/01/1963",
        "end": "12/02/1964",
        "branch": "Water Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 1964,
        "start": "13/02/1964",
        "end": "01/02/1965",
        "branch": "Wood Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 1965,
        "start": "02/02/1965",
        "end": "20/01/1966",
        "branch": "Wood Snake"
    },
    {
        "id_zodiac": 7,
        "year": 1966,
        "start": "21/01/1966",
        "end": "08/02/1967",
        "branch": "Fire Horse"
    },
    {
        "id_zodiac": 8,
        "year": 1967,
        "start": "09/02/1967",
        "end": "29/01/1968",
        "branch": "Fire Goat"
    },
    {
        "id_zodiac": 9,
        "year": 1968,
        "start": "30/01/1968",
        "end": "16/02/1969",
        "branch": "Earth Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 1969,
        "start": "17/02/1969",
        "end": "05/02/1970",
        "branch": "Earth Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 1970,
        "start": "06/02/1970",
        "end": "26/01/1971",
        "branch": "Metal Dog"
    },
    {
        "id_zodiac": 12,
        "year": 1971,
        "start": "27/01/1971",
        "end": "14/02/1972",
        "branch": "Metal Pig"
    },
    {
        "id_zodiac": 1,
        "year": 1972,
        "start": "15/02/1972",
        "end": "02/02/1973",
        "branch": "Water Rat"
    },
    {
        "id_zodiac": 2,
        "year": 1973,
        "start": "03/02/1973",
        "end": "22/01/1974",
        "branch": "Water Ox"
    },
    {
        "id_zodiac": 3,
        "year": 1974,
        "start": "23/01/1974",
        "end": "10/02/1975",
        "branch": "Wood Tiger"
    },
    {
        "id_zodiac": 4,
        "year": 1975,
        "start": "11/02/1975",
        "end": "30/01/1976",
        "branch": "Wood Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 1976,
        "start": "31/01/1976",
        "end": "17/02/1977",
        "branch": "Fire Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 1977,
        "start": "18/02/1977",
        "end": "06/02/1978",
        "branch": "Fire Snake"
    },
    {
        "id_zodiac": 7,
        "year": 1978,
        "start": "07/02/1978",
        "end": "27/01/1979",
        "branch": "Earth Horse"
    },
    {
        "id_zodiac": 8,
        "year": 1979,
        "start": "28/01/1979",
        "end": "15/2/80",
        "branch": "Earth Goat"
    },
    {
        "id_zodiac": 9,
        "year": 1980,
        "start": "16/02/1980",
        "end": "04/02/1981",
        "branch": "Metal Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 1981,
        "start": "05/02/1981",
        "end": "24/01/1982",
        "branch": "Metal Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 1982,
        "start": "25/01/1982",
        "end": "12/02/1983",
        "branch": "Water Dog"
    },
    {
        "id_zodiac": 12,
        "year": 1983,
        "start": "13/02/1983",
        "end": "01/02/1984",
        "branch": "Water Pig"
    },
    {
        "id_zodiac": 1,
        "year": 1984,
        "start": "02/02/1984",
        "end": "19/02/1985",
        "branch": "Wood Rat"
    },
    {
        "id_zodiac": 2,
        "year": 1985,
        "start": "20/02/1985",
        "end": "08/02/1986",
        "branch": "Wood Ox"
    },
    {
        "id_zodiac": 3,
        "year": 1986,
        "start": "09/02/1986",
        "end": "28/01/1987",
        "branch": "Fire Tiger"
    },
    {
        "id_zodiac": 4,
        "year": 1987,
        "start": "29/01/1987",
        "end": "16/02/1988",
        "branch": "Fire Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 1988,
        "start": "17/02/1988",
        "end": "05/02/1989",
        "branch": "Earth Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 1989,
        "start": "06/02/1989",
        "end": "26/1/90",
        "branch": "Earth Snake"
    },
    {
        "id_zodiac": 7,
        "year": 1990,
        "start": "27/01/1990",
        "end": "13/02/1991",
        "branch": "Metal Horse"
    },
    {
        "id_zodiac": 8,
        "year": 1991,
        "start": "15/02/1991",
        "end": "03/02/1992",
        "branch": "Metal Goat"
    },
    {
        "id_zodiac": 9,
        "year": 1992,
        "start": "04/02/1992",
        "end": "22/01/1993",
        "branch": "Water Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 1993,
        "start": "23/01/1993",
        "end": "09/02/1994",
        "branch": "Water Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 1994,
        "start": "10/02/1994",
        "end": "30/01/1995",
        "branch": "Wood Dog"
    },
    {
        "id_zodiac": 12,
        "year": 1995,
        "start": "31/01/1995",
        "end": "18/02/1996",
        "branch": "Wood Pig"
    },
    {
        "id_zodiac": 1,
        "year": 1996,
        "start": "19/02/1996",
        "end": "06/02/1997",
        "branch": "Fire Rat"
    },
    {
        "id_zodiac": 2,
        "year": 1997,
        "start": "07/02/1997",
        "end": "27/01/1997",
        "branch": "Fire Ox"
    },
    {
        "id_zodiac": 3,
        "year": 1998,
        "start": "28/01/1998",
        "end": "15/02/1999",
        "branch": "Earth Tigger"
    },
    {
        "id_zodiac": 4,
        "year": 1999,
        "start": "16/02/1999",
        "end": "04/02/2000",
        "branch": "Earth Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 2000,
        "start": "05/02/2000",
        "end": "23/01/2001",
        "branch": "Metal Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 2001,
        "start": "24/01/2001",
        "end": "11/02/2002",
        "branch": "Metal Snake"
    },
    {
        "id_zodiac": 7,
        "year": 2002,
        "start": "12/02/2002",
        "end": "31/01/2003",
        "branch": "Water Horse"
    },
    {
        "id_zodiac": 8,
        "year": 2003,
        "start": "01/02/2003",
        "end": "21/01/2004",
        "branch": "Water Goat"
    },
    {
        "id_zodiac": 9,
        "year": 2004,
        "start": "22/01/2004",
        "end": "08/02/2005",
        "branch": "Wood Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 2005,
        "start": "09/02/2005",
        "end": "28/01/2006",
        "branch": "Wood Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 2006,
        "start": "29/01/2006",
        "end": "17/02/2007",
        "branch": "Fire Dog"
    },
    {
        "id_zodiac": 12,
        "year": 2007,
        "start": "18/02/2007",
        "end": "06/02/2008",
        "branch": "Fire Pig"
    },
    {
        "id_zodiac": 1,
        "year": 2008,
        "start": "07/02/2008",
        "end": "25/01/2009",
        "branch": "Earth Rat"
    },
    {
        "id_zodiac": 2,
        "year": 2009,
        "start": "26/01/2009",
        "end": "13/02/2010",
        "branch": "Earth Ox"
    },
    {
        "id_zodiac": 3,
        "year": 2010,
        "start": "14/02/2010",
        "end": "02/02/2011",
        "branch": "Metal Tiger"
    },
    {
        "id_zodiac": 4,
        "year": 2011,
        "start": "03/02/2011",
        "end": "22/01/2012",
        "branch": "Metal Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 2012,
        "start": "23/01/2012",
        "end": "09/02/2013",
        "branch": "Water Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 2013,
        "start": "10/02/2013",
        "end": "30/01/2014",
        "branch": "Water Snake"
    },
    {
        "id_zodiac": 7,
        "year": 2014,
        "start": "31/01/2014",
        "end": "18/02/2015",
        "branch": "Wood Horse"
    },
    {
        "id_zodiac": 8,
        "year": 2015,
        "start": "19/02/2015",
        "end": "07/02/2016",
        "branch": "Wood Goat"
    },
    {
        "id_zodiac": 9,
        "year": 2016,
        "start": "08/02/2016",
        "end": "27/01/2017",
        "branch": "Fire Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 2017,
        "start": "28/01/2017",
        "end": "15/02/2018",
        "branch": "Fire Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 2018,
        "start": "16/02/2018",
        "end": "04/02/2019",
        "branch": "Earth Dog"
    },
    {
        "id_zodiac": 12,
        "year": 2019,
        "start": "05/02/2019",
        "end": "24/01/2020",
        "branch": "Earth Pig"
    },
    {
        "id_zodiac": 1,
        "year": 2020,
        "start": "25/01/2020",
        "end": "11/02/2021",
        "branch": "Metal Rat"
    },
    {
        "id_zodiac": 2,
        "year": 2021,
        "start": "12/02/2022",
        "end": "31/01/2022",
        "branch": "Metal Ox"
    },
    {
        "id_zodiac": 3,
        "year": 2022,
        "start": "01/02/2022",
        "end": "21/01/2023",
        "branch": "Water Tiger"
    },
    {
        "id_zodiac": 4,
        "year": 2023,
        "start": "22/01/2023",
        "end": "09/02/2024",
        "branch": "Water Rabbit"
    },
    {
        "id_zodiac": 5,
        "year": 2024,
        "start": "10/02/2024",
        "end": "28/01/2025",
        "branch": "Wood Dragon"
    },
    {
        "id_zodiac": 6,
        "year": 2025,
        "start": "29/01/2025",
        "end": "16/02/2026",
        "branch": "Wood Snake"
    },
    {
        "id_zodiac": 7,
        "year": 2026,
        "start": "17/02/2026",
        "end": "05/02/2027",
        "branch": "Fire Horse"
    },
    {
        "id_zodiac": 8,
        "year": 2027,
        "start": "06/02/2027",
        "end": "25/01/2028",
        "branch": "Fire Goat"
    },
    {
        "id_zodiac": 9,
        "year": 2028,
        "start": "26/01/2028",
        "end": "12/02/2029",
        "branch": "Earth Monkey"
    },
    {
        "id_zodiac": 10,
        "year": 2029,
        "start": "13/02/2029",
        "end": "02/02/2030",
        "branch": "Earth Rooster"
    },
    {
        "id_zodiac": 11,
        "year": 2030,
        "start": "02/02/2030",
        "end": "22/01/2031",
        "branch": "Metal Dog"
    },
    {
        "id_zodiac": 12,
        "year": 2031,
        "start": "23/01/2031",
        "end": "10/02/2032",
        "branch": "Metal Pig"
    }
];

export default years;