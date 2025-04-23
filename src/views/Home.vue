<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm px-3 w-100 fixed-top z-3 ">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/images/logo.png" alt="Bangkok Hospital" height="40" />
      </a>

      <!-- Hotline -->
      <div class="d-flex align-items-center me-auto ms-3">
        <i class="bi bi-telephone-fill text-danger me-1"></i>
        <span class="fw-bold text-primary">1719</span>
      </div>

      <!-- Toggle for Mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 h5">
          <!-- บริการ -->
          <li class="nav-item dropdown " @mouseenter="showService = true" @mouseleave="showService = false">
            <a class="nav-link dropdown-toggle px-4" href="#" data-bs-toggle="dropdown">บริการ</a>
            <ul class="dropdown-menu" :class="{ show: showService }">
              <li><a class="dropdown-item" href="#">ศูนย์และคลินิก</a></li>
            </ul>
          </li>

          <!-- ข้อมูลเพื่อเข้ารับบริการ -->
          <li class="nav-item dropdown" @mouseenter="showPlan = true" @mouseleave="showPlan = false">
            <a class="nav-link dropdown-toggle  px-4" href="#" data-bs-toggle="dropdown"
              >ข้อมูลเพื่อเข้ารับบริการ</a
            >
            <ul class="dropdown-menu" :class="{ show: showPlan }">
              <li><a class="dropdown-item" href="#">ข้อมูล 1</a></li>
              <li><a class="dropdown-item" href="#">ข้อมูล 2</a></li>
            </ul>
          </li>
   

          <!-- ข้อมูลสุขภาพ -->
          <li class="nav-item dropdown" @mouseenter="showHealth = true" @mouseleave="showHealth = false">
            <a class="nav-link dropdown-toggle  px-4" href="#" data-bs-toggle="dropdown">ข้อมูลสุขภาพ</a>
            <ul class="dropdown-menu" :class="{ show: showHealth }">
              <li><a class="dropdown-item" href="#">บทความ</a></li>
            </ul>
          </li>

          <!-- เกี่ยวกับเรา -->
          <li class="nav-item dropdown" @mouseenter="showAboutUs = true" @mouseleave="showAboutUs = false">
            <a class="nav-link dropdown-toggle  px-4" href="#" data-bs-toggle="dropdown">เกี่ยวกับเรา</a>
            <ul class="dropdown-menu" :class="{ show: showAboutUs }">
              <li><a class="dropdown-item" href="#">ประวัติ</a></li>
            </ul>
          </li>

          <!-- ภาษา -->
          <li class="nav-item">
            <a class="nav-link" href="#">TH</a>
          </li>

          <!-- Icons -->
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-search"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
const showService = ref(false)
const showPlan = ref(false)
const showHealth= ref(false)
const showAboutUs = ref(false)
</script>
