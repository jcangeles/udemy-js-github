// import { client_id, client_secret } from "./secret";

class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: auth,
      },
    };
    this.repo_count = 5;
    this.repo_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}`,
      this.config
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
