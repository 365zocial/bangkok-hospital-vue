<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm px-3">
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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- บริการ -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">บริการ</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">ศูนย์และคลินิก</a></li>
            </ul>
          </li>

          <!-- ข้อมูลเพื่อเข้ารับบริการ -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
              >ข้อมูลเพื่อเข้ารับบริการ</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">ข้อมูล 1</a></li>
              <li><a class="dropdown-item" href="#">ข้อมูล 2</a></li>
            </ul>
          </li>
          <!-- test -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pookpik
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <!-- test2 -->
          <client-only>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </client-only>

          <!-- ข้อมูลสุขภาพ -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">ข้อมูลสุขภาพ</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">บทความ</a></li>
            </ul>
          </li>

          <!-- เกี่ยวกับเรา -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">เกี่ยวกับเรา</a>
            <ul class="dropdown-menu">
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
