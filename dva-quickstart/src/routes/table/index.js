import {Table,Icon,Divider,message} from "antd";
import {Link} from "react-router-dom"
import { Tabdom,Radiotop} from 'components'
import './index.scss'

const columns = [
  {
    title:"运营图名称",
    dataIndex:"name",
    key:"name",
  },{
    title:"运营图",
    dataIndex:"name",
    key:"name2",
    render:text => <img src={text} width={40} height={40}/>,
  },{
    title:"链接",
    dataIndex:"name",
    key:"name3",
  },{
    title:"覆盖地区",
    dataIndex:"name",
    key:"name4",
  },{
    title:"创建时间",
    dataIndex:"name",
    key:"name5",
  },{
    title:"修改时间",
    dataIndex:"name",
    key:"name6",
  },{
    title:"有效时段",
    dataIndex:"name",
    key:"name7",
  },{
    title:"排序值",
    dataIndex:"age",
    key:"age8",
  },{
    title:"状态",
    dataIndex:"age",
    key:"age9",
  },{
    title:"审核状态",
    dataIndex:"address",
    key:"address10"
  },{
    title:"操作",
    key:"action",
    render:(text,record) => (
      <span>
       <Link to={`/mytable/${record.key}`}>Edit</Link>
       <Divider type="vertical" />
       <a href="javascript:void(0)" >Delete </a>
       <Divider type="vertical" />
       <a href="javascript:void(0)" className="ant-dropdown-link">
         More actions <Icon type="down"/>
       </a>
      </span>
    )
  }]


const data = [];
for (let i = 0; i < 36; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


const Mytable = ({children,history})=>{
  const onPageChange = (pageNumber)=> {
    message.info(`pageNumber: ${pageNumber}`)
  }
  const handleSize = (current,pageSize) => {
    message.info(`current: ${current}--pageSize:${pageSize} `)
  }
    return (
      <div>
       <Tabdom />
       <Radiotop history = {history}/>
        <Table
         bordered
         columns={columns}
         dataSource={data}
         scroll={{ x: 1300 }}
         pagination={{
              showQuickJumper:true,
              showSizeChanger:true,
              defaultPageSize:5,
              onChange:onPageChange,
              onShowSizeChange:handleSize,
              pageSizeOptions:["5","10","20","30"]
            }}
         />
       </div>
    )
}

export default Mytable;
