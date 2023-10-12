<template>
      <!-- advance search -->
  <section class="adv_search_sc">
        <div class="container-fluid container-xxxl">
            <div class="adv_search_wrapper bxy_red br_5">
                <div class="adv_search_inner">
                    <div class="d-md-none accordion-button collapsed" role="button" data-bs-toggle="collapse"
                        data-bs-target="#filterCollapse">
                        <h2 class="fw_5 fs_25 lh_36 text-capitalize">search motor parts by: </h2>
                    </div>
                    <div class="accordion-collapse collapse" id="filterCollapse">
                        <form action="#" class="d-grid gap-3 gap-md-4">
                            <div class="row">
                                <div class="col-lg-3 d-none d-md-block">
                                    <h2 class="mb-2 mb-lg-0 fw_5 fs_25 lh_36 text-capitalize">search motor parts by:
                                    </h2>
                                </div>
                                <div class="col-4 col-lg-3">
                                    <select class="form-select fs_14 lh_20 fc_gd">
                                        <option selected>Select Brand</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-4 col-lg-3">
                                    <select class="form-select fs_14 lh_20 fc_gd">
                                        <option selected>Select Model</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-4 col-lg-3">
                                    <select class="form-select fs_14 lh_20 fc_gd">
                                        <option selected>Select Year</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                            </div>
                            <div class="text-center text-md-end">
                                <button
                                    class="bg_red br_5 fw_5 fs_14 lh_20 fc_white text-uppercase tbg_3 hover">search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>