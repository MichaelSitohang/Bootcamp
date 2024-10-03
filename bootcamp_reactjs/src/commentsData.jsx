// commentsData.js
import { faker } from '@faker-js/faker'; 

const commentsData = [
  {
    author: "Matt",
    avatar: faker.image.avatar(),
    date: "Today at 5:42PM",
    Comments: "How artistic!",
  },
  {
    author: "Elliot Fu",
    avatar: faker.image.avatar(),
    date: "Yesterday at 12:30AM",
    Comments: "This has been very useful for my research. Thanks as well!",
  },
  {
    author: "Jenny Hess",
    avatar: faker.image.avatar(),
    date: "Just now",
    Comments: "Elliot you are always so right :)",
  },
  {
    author: "Joe Henderson",
    avatar: faker.image.avatar(),
    date: "5 days ago",
    Comments: "Dude, this is awesome. Thanks so much!",
  },
  {
    author: "Veronica",
    avatar: faker.image.avatar(),
    date: "3 days ago",
    Comments: "This article really helped me understand the topic. Thank you!",
  },
  {
    author: "Chris Johnson",
    avatar: faker.image.avatar(),
    date: "1 week ago",
    Comments: "I found this post very insightful and engaging.",
  },
  {
    author: "Laura Benson",
    avatar: faker.image.avatar(),
    date: "2 days ago",
    Comments: "Great insights, I'm definitely going to implement these ideas.",
  },
  {
    author: "James Lee",
    avatar: faker.image.avatar(),
    date: "4 hours ago",
    Comments: "This is exactly what I was looking for, thanks!",
  },
  {
    author: "Sophia Anderson",
    avatar: faker.image.avatar(),
    date: "2 weeks ago",
    Comments: "I really appreciate the thorough explanation in this post.",
  },
  {
    author: "Michael Brown",
    avatar: faker.image.avatar(),
    date: "Just now",
    Comments: "Well written and very easy to follow. Thanks for sharing!",
  },
];

export default commentsData;
