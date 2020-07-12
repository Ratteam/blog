(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{327:function(s,t,a){"use strict";a.r(t);var e=a(17),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"oracle的日期时间范围查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle的日期时间范围查询"}},[s._v("#")]),s._v(" Oracle的日期时间范围查询")]),s._v(" "),a("p",[s._v("AND A.CREATETIME between to_date('2020-04-10','yyyy-MM-dd') AND to_date('2020-04-13','yyyy-MM-dd');")]),s._v(" "),a("h2",{attrs:{id:"oracle语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle语句"}},[s._v("#")]),s._v(" oracle语句")]),s._v(" "),a("blockquote",[a("p",[s._v("查询最近七天内在数据")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sysdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yyyymmdd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("修改oracle有数据的字段类型")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 修改字段类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" BANKLIST "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" BANKCODE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" BANKCODEBAK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" BANKLIST "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" BANKCODE VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" BANKLIST "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" BANKCODE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("trim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BANKCODEBAK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" BANKLIST "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" BANKCODEBAK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BANKLIST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BANKCODE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'管辖'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"oracle查看被锁的表及解除锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle查看被锁的表及解除锁"}},[s._v("#")]),s._v(" oracle查看被锁的表及解除锁")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("查询哪些对象被锁\n\nselect object_name, machine, s.sid, s.serial#\nfrom v$locked_object l, dba_objects o, v$session s\nwhere l.object_id　 = 　o.object_id\nand l.session_id = s.sid;\n \n下面的语句用来杀死一个进程：\n\nalter system kill session '24,111'; --(其中24,111分别是上面查询出的sid,serial#)\n\n获得进程(线程)号\n\nselect spid, osuser, s.PROGRAM\nfrom v$session s, v$process p\nwhere s.PADDR = p.ADDR\nand s.SID = '425';\n \n杀进程\n\nkill - 9 26099 --查询出的spid\n\n")])])]),a("h2",{attrs:{id:"oracle-分页查询数据重复问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-分页查询数据重复问题"}},[s._v("#")]),s._v(" oracle 分页查询数据重复问题")]),s._v(" "),a("p",[s._v("oracle 分页查询数据的时候必须要有排序；\n排序的字段必须返回必须是唯一的，比如主键，或者添加多个排序。\n"),a("code",[s._v("ORDER BY ID;")])])])}),[],!1,null,null,null);t.default=r.exports}}]);