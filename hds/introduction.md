---
layout: docs
title:
description:
group: getting-started
redirect_from:
  - /introduction/
---

<div class='hds-module-header'>
  <span class='header-flag mr-2'></span>
  <span class='title'>接口调用</span>
</div>

<div >
  <div class="mb-2">
    <form>
      <div class="form-row">
        <div class="col-3">
          <label class="sr-only" for="name">Name</label>
          <input id='name' type="text" class="form-control form-control-mid"  placeholder="请输入名称搜索">
        </div>
        <div class="col">
          <button type="submit" class="btn btn-mid btn-primary">查询</button>

        </div>
      </div>
    </form>
  </div>
  <div >
    <table class="table hds-table-light table-hover" >
      <thead class='hds-thead-light'>
        <tr>
          <th scope="col" style='width:12%;'>#</th>
          <th scope="col">单位</th>
          <th scope="col">角色名称</th>
          <th scope="col">描述</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>单位或公司</td>
          <td>系统管理员</td>
          <td>系统管理和维护</td>
          <td>
            <a  data-toggle="modal" data-target="#exampleModal" href="#">查看</a>
            <a href="#">修改</a>
            <a  data-toggle="modal" data-target="#exampleModal" href="#">删除</a>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>单位或公司</td>
          <td>观测员</td>
          <td>观测</td>
          <td>
            <a href="#">查看</a>
            <a href="#">修改</a>
            <a href="#">删除</a>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>单位或公司</td>
          <td>观测员3</td>
          <td>观测</td>
          <td>
            <a href="#">查看</a>
            <a href="#">修改</a>
            <a href="#">删除</a>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>单位或公司</td>
          <td>观测员4</td>
          <td>观测</td>
          <td>
            <a href="#">查看</a>
            <a href="#">修改</a>
            <a href="#">删除</a>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>单位或公司</td>
          <td>观测员5</td>
          <td>观测</td>
          <td>
            <a  data-toggle="modal" data-target="#exampleModal" href="#">查看</a>
            <a href="#">修改</a>
            <a href="#">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="alert-loading" class="alert alert-secondary hds-alert" style="display:none;">
      <strong>操作进行中，请稍候！</strong>
        <div class="fade in">
          <span class="spinner"></span>
        </div>
    </div>
    <div id="alert-info" class="alert alert-warning hds-alert" style="display: none;"><em class="fa fa-info-circle  fa-2x"></em><strong>服务器返回了非预期的值，请联系技术人员，代码:500</strong></div>

    <div class="taiji_pager">
      <ul class="hds-pagination pagination  justify-content-end py-1 pr-3">
        <li><span class="hds-page-info">共<strong class="totalCount">5</strong>条/<strong>3</strong>页</span></li>
        <li><a href="#" class="mr-1 btn btn-third btn-sm disabled" value="0">&lt;  上一页</a></li>
        <li><a href="#" class="mr-1 btn btn-third btn-sm active" value="1">1</a></li>
        <li><a href="#" class="taiji_pager_item mr-1 btn btn-third btn-sm" value="2">2</a></li>
        <li><a href="#" class="taiji_pager_item mr-1 btn btn-third btn-sm" value="3">3</a></li>
        <li><a href="#" class="taiji_pager_item btn btn-third btn-sm" value="2">下一页 &gt;</a></li>
        <li class="mx-1">
          <span class="hds-page-info">
            到<input type="text" style="width:40px;display:inline-block;"
             value="1" class="taiji_pager_input form-control form-control-sm"/>页
          </span>
          <a class="taiji_pager_goto mx-1" href="#">跳转</a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
