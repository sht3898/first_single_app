<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/5brvJbR1Pn8/1600x900" style="width:100%">
      <div style="font-size:5vw; line-height:1.2em; text-align:center;" slot="text">후회하지 않는 삶을 살자</div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5>
        <v-flex col-sm-8 col-12 text-sm-left text-center>
          <h2 class="headline mb-3">About Me</h2>
          <p class="mr-4">안녕하세요, SSAFY 참가자 여러분!<br/>함께 프로젝트를 진행하게 되어서 기쁩니다. Vue는 어렵지 않습니다. 차근차근 하나씩 따라하다보면 어느새 멋진 블로그가
            만들어져 있을겁니다! 모두 화이팅 하시고, 꼭 완성해서 좋은 평가 있길 바라겠습니다.</p>
        </v-flex>
        <v-flex xs4 d-none d-sm-flex>
          <v-img :src="getImgUrl('130dpi.jpg')" aspect-ratio="1.5"/>
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Portfolio</h2>
          <PortfolioList></PortfolioList>
        </v-flex>
      </v-layout>

      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Post</h2>
          <PostList :column="2"></PostList>
        </v-flex>
      </v-layout>


      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Project</h2>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'

export default {
	name: 'HomePage',
	components: {
		ImgBanner,
		PortfolioList,
		PostList,
		RepositoryList
	},
	methods: {
		getImgUrl(img) {
			return require('../assets/' + img)
		}
	},
}
</script>
