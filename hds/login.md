---
layout: login
title:
description:
group:
redirect_from:
---

<div class="hds-login">
  <div class="navbar navbar-expand navbar-dark flex-row login-topbar">
    <a class="navbar-brand  mr-0 mx-md-2" href="{{ site.baseurl }}/" aria-label="Bootstrap">
      {%- include icons/bootstrap.svg width="24" height="24" class="d-block" -%}
    </a>
    <a class="navbar-brand" href="{{ site.baseurl }}/" aria-label="Bootstrap">
      资料处理入库子系统
    </a>
  </div>
  <div class="login-body">
    <div class="login-body-box">
      <div class="login-module">
        <div class="login-wrap">
          <form>
            <div class="title">用户登录</div>
            <div class="form-group">
              <input type="email" class="form-control" id="loginName" aria-describedby="loginName" placeholder="用户名">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="password" placeholder="密码">
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-primary">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>

</div>

<footer class="hds-login-footer">
  <div class="container-fluid px-5 py-3 ">
    <ul class="hds-login-footer-links">
      <li><a href="#">关于我们</a></li>
      <li><a href="#">联系我们</a></li>
    </ul>
    <p class="copyright">© 2009-2018 www.taiji.com.cn 版权所有 ICP证：京xxxxxxxxx.</p>
    <p>
        <a target="_blank" href="http://idinfo.zjaic.gov.cn/bscx.do?method=lzxx&amp;id=3301963301080000025024"       style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
              <img alt="" style="width: 20px;vertical-align: baseline;" src="//gw.alicdn.com/tfs/TB1GxwdSXXXXXa.aXXXXXXXXXXX-65-70.gif">
        </a>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                  <img alt="" style="float: left; width: 20px;vertical-align: baseline;" src="//img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png">
                  <span style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
                  公网安备 xxxxxx号
                  </span>
        </a>
    </p>
  </div>
</footer>
