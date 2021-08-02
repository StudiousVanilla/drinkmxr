**:cocktail: DrinkMXR**

Web app built by [Oisín Byrne](https://www.oisinbyrne.me/)

*This project was built primarily to practice using API's.*

DrinkMXR is a web application, designed for mobile though it works on larger screens, that can help users determine what cocktails they can make given a set on ingredients.

Just add your ingredients to the 'shaker' and search / 'shake'.

DrinkMXR will return a list of cocktails you can make with **all** of those ingredients.


- Built using React and Tailwind CSS

- The application was deployed to Netlify


** :file_folder: Data **

- Application sends a query string to the [backend](https://github.com/StudiousVanilla/api_practice_backend) which uses grpahQL to fetch the relevant data from [thecocktaildb](https://www.thecocktaildb.com/api.php).

- Thanks to GraphQL on the backend only useful data is returned to the frontend.

- Some data is then *cleaned* on the frontend eg. Converting Imperial units ot Metric

**:art: Styling ##**

- This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

- Icons were made or purchased under a fair use license from [Iconfinder](https://www.iconfinder.com/)