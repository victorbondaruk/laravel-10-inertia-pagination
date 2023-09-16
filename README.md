<h1 align="center">Laravel 10 inertia (Vue) Pagination</h1>
<h3 align="center">Laravel 10 with Inertia vue.js where the different pagination and infinite scroll techniques are exemplified.</h3>
<p align="center">
<img src="https://poser.pugx.org/victorbondaruk/laravel-10-inertia-pagination/license" alt="License">
</p>

## Built with
- [Laravel 10](https://github.com/laravel/framework)
- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Inertiajs](https://inertiajs.com/)
- [Laravel - Paginator](https://laravel.com/docs/10.x/pagination#cursor-paginator-instance-methods)

## Installation

```sh
git clone https://github.com/victorbondaruk/laravel-10-inertia-pagination.git
```

#### Base de datos

```sh
php artisan migrate:refresh --seed
```

### With Docker Desktop
- To get started, you need to install [Docker Desktop](https://www.docker.com/products/docker-desktop).
- You may run the following command in your terminal
- Windows open WSL2 Linux terminal. [Docker Desktop WSL 2 backend](https://docs.docker.com/desktop/windows/wsl/)
- `docker run --rm -v "$(pwd)":/opt -w /opt laravelsail/php82-composer:latest bash -c "git clone https://github.com/victorbondaruk/laravel-10-inertia-pagination.git && cd laravel-10-inertia-pagination && php artisan sail:install --with=mysql,redis,meilisearch,mailpit,selenium"`
- `cd laravel-10-inertia-pagination`
- `./vendor/bin/sail pull mysql redis meilisearch mailpit selenium`
- `./vendor/bin/sail build`
- `./vendor/bin/sail up`
- Create a new MYSQL database and update database details in `.env` file
- `./vendor/bin/sail artisan migrate --seed`
- `./vendor/bin/sail npm install`
- `./vendor/bin/sail npm run build`
- `./vendor/bin/sail npm run dev`
- `php artisan serve`
- Now open http://localhost:8000/


## Screenshots
<p align="center">
	<img src="https://github.com/victorbondaruk/laravel-10-inertia-pagination/Documentation/paginate.index.png" >
	<br/><br/>
	<img src="https://github.com/victorbondaruk/laravel-10-inertia-pagination/Documentation/paginate.simple.png" >
	<br/><br/>
	<img src="https://github.com/victorbondaruk/laravel-10-inertia-pagination/Documentation/paginate.cursor.png" >
    <br/><br/>
	<img src="https://github.com/victorbondaruk/laravel-10-inertia-pagination/Documentation/paginate.cursor-tope.png" >
	<br/><br/>
</p>


## Test

```sh
php artisan test
```

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).