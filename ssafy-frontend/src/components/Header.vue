<template>
    <div>
        <v-navigation-drawer v-model="sidebar" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        {{ appTitle }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>


        <v-toolbar dense>
            <span class="hidden-sm-and-up">
                <v-app-bar-nav-icon @click="sidebar = !sidebar">
                    <v-icon>{{ "menu" }}</v-icon>
                </v-app-bar-nav-icon>
            </span>
            
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                    {{ appTitle }}
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
                    <v-icon left dark>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            appTitle: "Hyuntaek's portfolio",
			sidebar: false,
			menuItems: [
				{ title: 'Portfolio', path: '/portfolio', icon: 'people'},
				{ title: 'Post', path: '/post', icon: 'folder'},
				{ title: 'Login', path: '/login', icon: 'lock_open'}
			]

        }
    }
}
</script>