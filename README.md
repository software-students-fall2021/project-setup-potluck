# Project Repository

---

## Description

**Potluck** is a school-specific social media platform for students to find and share their experiences with food around campus. Users can post recipes, items they bought from local grocery stores, food from local restaurants, or anything else they want to share. Students can also discuss in the feed area, Sample topics include: Street Food, Bubble Tea, Italian food, 3-ingredient meals, et cetera.

## Product Vision Statement

**Potluck** consists of two main components.

**The Map** shows a wholistic view of cheapeats, restaurants, and affordable grocery stores around campus. Users can select a location, where they can view photos, the address, and any posts related to the location. Each location also has its own tags.

**The Feed** displays the posts shared by users (students), whether that be experiences at a certain restaurant, a new recipe discovered, or a cheap-eats venue around the corner. Each post has a title, text content, and tags. Users can comment on posts.

Both **The Feed** and **The Map** have a filter functionality, where users can choose to view posts/locations with only specific tags.

In addition to the feed and map view, users can view their own account page, where they can change their profile photo, username, settings, and log out.

Finally, the users can read about the app (PotLuck) and its origins and purpose in the About page.

Initial [Prototype](https://www.figma.com/proto/XMcwr5StWMdYmwJL3cW51j/First-attempt?node-id=47701%3A946&scaling=min-zoom&page-id=33%3A444&starting-point-node-id=47701%3A946&show-proto-sidebar=1) (check different flows on the left the handside)  and [design file](https://www.figma.com/file/XMcwr5StWMdYmwJL3cW51j/First-attempt?node-id=33%3A444)
---

## Meet the Team

- [Lauren Gatesman](https://github.com/lkgatesman)
- [Jin Kim](https://github.com/jhk742)
- [Seunggun Lee](https://github.com/seungguini)
- [Christian Weinschenk](https://github.com/HaveACookie)
- [Wajahat Mirza](https://github.com/Wajahat-Mirza)

---

## Contribute to the Project

Want to **contribute** to our project? [Find out how!](https://github.com/software-students-fall2021/project-setup-potluck/blob/master/CONTRIBUTING.md)

## Build Potluck

### Using Github
1. Clone this repository with
```bash
git clone https://github.com/software-students-fall2021/project-setup-potluck.git
```
2. Follow [these instructions](https://github.com/software-students-fall2021/project-setup-potluck/blob/master/back-end/README.md) to install and run the **back-end** 
3. Follow [these instructions](https://github.com/software-students-fall2021/project-setup-potluck/blob/master/front-end/README.md) to install and run the **front-end** 

### Using a Docker Image
1. Install [Docker](https://docs.docker.com/get-docker/)
2. Clone the [backend-end docker repository]((https://hub.docker.com/r/seungguini/potluck-backendend)) with
```bash
docker pull seungguini/potluck-backend
```
3. Clone the [front-end docker repository]((https://hub.docker.com/r/seungguini/potluck-frontend)) with
```bash
docker pull seungguini/potluck-frontend
```
4. Create `.env.backend` and populate necessary backend-end environment variables
5. Create `.env.frontend` and populate necessary front-end environment variables
6. Run the back-end image with
```bash
docker run -p 3001:3001/tcp --env-file=.env.backend seungguini/potluck-backend:latest
```
7. Run the front-end image with
```bash
docker run -p 3000:3000/tcp --env-file=.env.frontend seungguini/potluck-frontend:latest
```
8. Visit the website at [localhost:3000](http://localhost:3001)
## Test Potluck

_To be filled.._
