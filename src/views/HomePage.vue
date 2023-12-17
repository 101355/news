<template>
  <div class="d-flex justify-content-center py-3 ">
    <!-- <p class="btn btn-dager text-white btn-sm me-4" @click="home()" v-if="!tokenStatus">Home</p>
    <p class="btn bg-dark text-white btn-sm" @click="login()" v-if="!tokenStatus">Login</p>
    <p class="btn bg-dark text-white btn-sm" @click="logout()" v-if="tokenStatus">Logout</p> -->
  </div>
    <!-- Whats New Start -->
              <section class="whats-news-area pt-50 pb-20">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="row d-flex justify-content-between">
                                  <div class="col-lg-3 col-md-3">
                                      <div class="section-tittle mb-30">
                                          <h3>Whats New</h3>
                                      </div>
                                  </div>
                                  <!-- <div class="col-lg-9 col-md-9">
                                      <div class="properties__button">
                                          
                                          <nav>
                                              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="details.htmlnav-home" role="tab" aria-controls="nav-home" aria-selected="true" @click="categorySearch('')">All</a
                              >
                              <a
                                class="nav-item nav-link"
                                id="nav-profile-tab"
                                data-toggle="tab"
                                href="#"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                                v-for="(category,index) in categoryLists"
                                :key="index"
                                @click="categorySearch(category.title)"
                                >{{category.title}}</a
                              >                              
                            </div>
                          </nav>
                          
                        </div>
                      </div> -->
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <!-- <div class="d-flex justify-content-end mb-3">
                          <div class="col-3">
                            <input type="text" class="form-control justify-content-end" v-model="searchKey"
                            v-on:keyup.enter="search()">
                          </div>
                          <i class="fa-solid fa-magnifying-glass mt-2 ms-3" style="font-size: 25px;" @click="search()"></i>
                        </div> -->
                        <!-- Nav Card -->
                        <div class="tab-content" id="nav-tabContent">
                          <!-- card one -->
                          <div
                            class="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="whats-news-caption">
                              <!-- <span class="text-white bg-danger rounder p-5 d-flex justify-content-center my-5 h1 shadow" v-if="!tokenStatus">You don't have permission for that</span>
                              <span v-else>
                                <div class="row">

                                  <div class="mt-5 d-flex align-items-center" style="height: 30vh;"
                                  v-if="postLists.length == 0">
                                    <h1 class="mx-auto text-danger">There is no data!</h1>
                                  </div>

                                  <div class="col-lg-6 col-md-6"
                                  v-else
                                  v-for="(post, index) in postLists" :key="index">
                                      <div class="single-what-news mb-100" 
                                      @click="newsDetails(post.post_id)"
                                      >
                                        <div class="what-img">
                                          <img
                                            :src="post.image"
                                          />
                                        </div>
                                        <div class="what-cap">
                                          <span class="color1">Code Lab News</span>
                                          <h4>
                                            <a href="details.html"
                                              >{{ post.title }}</a
                                            >
                                          </h4>
                                        </div>
                                      </div>
                                  </div>                              
                                </div>
                              </span> -->
                              <span class="text-white rounder p-5 d-flex justify-content-center my-5 h1 shadow">
                                <div class="">
                                        <div class="row">
                                          <div class="single-what-news mb-100 col-6">
                                            <div class="what-img">
                                              <img src="../assets/car/car1.jpg" style="width: 400px; height: 400px;">
                                            </div>
                                            <div class="what-cap">
                                              <span class="color1">Code Lab News</span>
                                              <h4>
                                                <a href="#"
                                                  >Testing 1</a
                                                >
                                              </h4>
                                            </div>
                                          </div>
                                          <div class="single-what-news mb-100 col-6">
                                              <div class="what-img">
                                                <img src="../assets/car/car2.jpg" style="width: 400px; height: 400px;">
                                              </div>
                                              <div class="what-cap">
                                                <span class="color1">Code Lab News</span>
                                                <h4>
                                                  <a href="#"
                                                    >Testing 2</a
                                                  >
                                                </h4>
                                              </div>
                                            </div>
                                        </div>
                                          <div class="row">
                                            <div class="single-what-news mb-100 col-6">
                                              <div class="what-img">
                                                <img src="../assets/car/car3.jpg" style="width: 400px; height: 400px;">
                                              </div>
                                              <div class="what-cap">
                                                <span class="color1">Code Lab News</span>
                                                <h4>
                                                  <a href="#"
                                                    >Testing 3</a
                                                  >
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="single-what-news mb-100 col-6">
                                              <div class="what-img">
                                                <img src="../assets/car/car4.jpg" style="width: 400px; height: 400px;">
                                              </div>
                                              <div class="what-cap">
                                                <span class="color1">Code Lab News</span>
                                                <h4>
                                                  <a href="#"
                                                    >Testing 4</a
                                                  >
                                                </h4>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="single-what-news mb-100 col-6">
                                              <div class="what-img">
                                                <img src="../assets/car/car5.jpg" style="width: 400px; height: 400px;">
                                              </div>
                                              <div class="what-cap">
                                                <span class="color1">Code Lab News</span>
                                                <h4>
                                                  <a href="#"
                                                    >Testing 5</a
                                                  >
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="single-what-news mb-100 col-6">
                                              <div class="what-img">
                                                <img src="../assets/car/car6.jpg" style="width: 400px; height: 400px;">
                                              </div>
                                              <div class="what-cap">
                                                <span class="color1">Code Lab News</span>
                                                <h4>
                                                  <a href="#"
                                                    >Testing 6</a
                                                  >
                                                </h4>
                                              </div>
                                            </div>
                                          </div>
                                    </div>  
                              </span>
                            </div>
                          </div>                          
                        </div>
                        <!-- End Nav Card -->
                      </div>
                    </div>
                  </div>
               </div>
               </div>           
              </section>
              <!-- Whats New End -->

              <!--Start pagination -->
              <!-- <div class="pagination-area pb-45 text-center">
                  <div class="container">
                      <div class="row">
                          <div class="col-xl-12">
                              <div class="single-wrap d-flex justify-content-center">
                                  <nav aria-label="Page navigation example">
                                      <ul class="pagination justify-content-start">
                                          <li class="page-item">
                                              <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span
                            ></a>
                                                  </li>
                                                  <li class="page-item active">
                                                      <a class="page-link" href="details.html">01</a>
                                                  </li>
                                                  <li class="page-item">
                                                      <a class="page-link" href="details.html">02</a>
                                                  </li>
                                                  <li class="page-item">
                                                      <a class="page-link" href="details.html">03</a>
                                                  </li>
                                                  <li class="page-item">
                                                      <a class="page-link" href="details.html"><span class="flaticon-arrow right-arrow"></span
                            ></a>
                                                  </li>
                                                  </ul>
                                          </nav>
                                          </div>
                                      </div>
                                  </div>
                              </div>
              </div> -->
              <!-- End pagination  -->
</template>
<script src="../js/homePage.js"></script>
