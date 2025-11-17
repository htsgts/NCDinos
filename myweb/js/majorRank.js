const tabs = document.querySelectorAll(".tab-menu button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.dataset.tab;
    contents.forEach(c => {
      c.classList.remove("active");
      if (c.id === target) c.classList.add("active");
    });
  });
});

// 순위 기록
const rankData = {
  "2025": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>LG</td><td>144</td><td>85</td><td>56</td><td>3</td><td>0.603</td><td>0.0</td><td>3패</td><td>1승0무4패</td></tr>
        <tr><td>2</td><td>한화</td><td>144</td><td>83</td><td>57</td><td>4</td><td>0.593</td><td>1.5</td><td>1패</td><td>2승1무2패</td></tr>
        <tr><td>3</td><td>SSG</td><td>144</td><td>75</td><td>65</td><td>4</td><td>0.536</td><td>9.5</td><td>2패</td><td>3승0무2패</td></tr>
        <tr><td>4</td><td>삼성</td><td>144</td><td>74</td><td>68</td><td>2</td><td>0.521</td><td>11.5</td><td>1패</td><td>3승0무2패</td></tr>
        <tr class="topteam"><td>5</td><td>NC</td><td>144</td><td>71</td><td>67</td><td>6</td><td>0.514</td><td>12.5</td><td>9승</td><td>5승0무0패</td></tr>
        <tr><td>6</td><td>KT</td><td>144</td><td>71</td><td>68</td><td>5</td><td>0.511</td><td>13.0</td><td>1승</td><td>2승1무2패</td></tr>
        <tr><td>7</td><td>롯데</td><td>144</td><td>66</td><td>72</td><td>6</td><td>0.478</td><td>17.5</td><td>3패</td><td>1승0무4패</td></tr>
        <tr><td>8</td><td>KIA</td><td>144</td><td>65</td><td>75</td><td>4</td><td>0.464</td><td>19.5</td><td>2승</td><td>2승0무3패</td></tr>
        <tr><td>9</td><td>두산</td><td>144</td><td>61</td><td>77</td><td>6</td><td>0.442</td><td>22.5</td><td>2승</td><td>3승0무2패</td></tr>
        <tr><td>10</td><td>키움</td><td>144</td><td>47</td><td>93</td><td>4</td><td>0.336</td><td>37.5</td><td>5패</td><td>0승0무5패</td></tr>
      </tbody>
    </table>`,
  "2024": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>KIA</td><td>144</td><td>87</td><td>55</td><td>2</td><td>0.613</td><td>0.0</td><td>2승</td><td>3승0무2패</td></tr>
        <tr><td>2</td><td>삼성</td><td>144</td><td>78</td><td>64</td><td>2</td><td>0.549</td><td>9.0</td><td>1패</td><td>2승0무3패</td></tr>
        <tr><td>3</td><td>LG</td><td>144</td><td>76</td><td>66</td><td>2</td><td>0.535</td><td>11.0</td><td>2승</td><td>4승0무1패</td></tr>
        <tr><td>4</td><td>두산</td><td>144</td><td>74</td><td>68</td><td>2</td><td>0.521</td><td>13.0</td><td>4승</td><td>4승0무1패</td></tr>
        <tr><td>5</td><td>KT</td><td>144</td><td>72</td><td>70</td><td>2</td><td>0.507</td><td>15.0</td><td>3승</td><td>3승0무2패</td></tr>
        <tr><td>6</td><td>SSG</td><td>144</td><td>72</td><td>70</td><td>2</td><td>0.507</td><td>115.0</td><td>4승</td><td>4승0무1패</td></tr>
        <tr><td>7</td><td>롯데</td><td>144</td><td>66</td><td>74</td><td>4</td><td>0.471</td><td>20.0</td><td>1승</td><td>3승0무2패</td></tr>
        <tr><td>8</td><td>한화</td><td>144</td><td>66</td><td>76</td><td>2</td><td>0.465</td><td>21.0</td><td>2패</td><td>2승0무3패</td></tr>
        <tr class="topteam"><td>9</td><td>NC</td><td>144</td><td>61</td><td>81</td><td>2</td><td>0.430</td><td>26.0</td><td>2패</td><td>1승0무4패</td></tr>
        <tr><td>10</td><td>키움</td><td>144</td><td>58</td><td>86</td><td>0</td><td>0.403</td><td>30.0</td><td>5패</td><td>0승0무5패</td></tr>
      </tbody>
    </table>`,
  "2023": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>LG</td><td>144</td><td>86</td><td>56</td><td>2</td><td>0.606</td><td>0.0</td><td>1승</td><td>2승 0무 3패</td></tr>
        <tr><td>2</td><td>KT</td><td>144</td><td>79</td><td>62</td><td>3</td><td>0.560</td><td>6.5</td><td>3승</td><td>4승 0무 1패</td></tr>
        <tr><td>3</td><td>SSG</td><td>144</td><td>76</td><td>65</td><td>3</td><td>0.539</td><td>9.5</td><td>2승</td><td>4승 0무 1패</td></tr>
	    <tr class="topteam"><td>4</td><td>NC</td><td>144</td><td>75</td><td>67</td><td>2</td><td>0.528</td><td>11.0</td><td>2패</td><td>2승 0무 3패</td></tr>
        <tr><td>5</td><td>두산</td><td>144</td><td>74</td><td>68</td><td>2</td><td>0.521</td><td>12.0</td><td>3패</td><td>2승 0무 3패</td></tr>
        <tr><td>6</td><td>KIA</td><td>144</td><td>73</td><td>69</td><td>2</td><td>0.514</td><td>13.0</td><td>2승</td><td>4승 0무 1패</td></tr>
        <tr><td>7</td><td>롯데</td><td>144</td><td>68</td><td>76</td><td>0</td><td>0.472</td><td>19.0</td><td>1승</td><td>2승 0무 3패</td></tr>
        <tr><td>8</td><td>삼성</td><td>144</td><td>61</td><td>82</td><td>1</td><td>0.427</td><td>25.5</td><td>1패</td><td>1승 0무 4패</td></tr>
        <tr><td>9</td><td>한화</td><td>144</td><td>58</td><td>80</td><td>6</td><td>0.420</td><td>26.0</td><td>1패</td><td>2승 0무 3패</td></tr>
        <tr><td>10</td><td>키움</td><td>144</td><td>58</td><td>83</td><td>3</td><td>0.411</td><td>27.5</td><td>2패</td><td>3승 0무 2패</td></tr>
      </tbody>
    </table>`,
  "2022": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>SSG</td><td>144</td><td>88</td><td>52</td><td>4</td><td>0.629</td><td>0.0</td><td>4패</td><td>1승 0무 4패</td></tr>
        <tr><td>2</td><td>키움</td><td>144</td><td>80</td><td>62</td><td>2</td><td>0.563</td><td>9.0</td><td>1승</td><td>2승 0무 3패</td></tr>
        <tr><td>3</td><td>LG</td><td>144</td><td>87</td><td>55</td><td>2</td><td>0.613</td><td>2.0</td><td>1승</td><td>3승 0무 2패</td></tr>
        <tr><td>4</td><td>KT</td><td>144</td><td>80</td><td>62</td><td>2</td><td>0.563</td><td>9.0</td><td>1패</td><td>2승 0무 3패</td></tr>
        <tr><td>5</td><td>KIA</td><td>144</td><td>70</td><td>73</td><td>1</td><td>0.490</td><td>19.5</td><td>1패</td><td>3승 0무 2패</td></tr>
        <tr class="topteam"><td>6</td><td>NC</td><td>144</td><td>67</td><td>74</td><td>3</td><td>0.475</td><td>21.5</td><td>1패</td><td>3승 0무 2패</td></tr>
        <tr><td>7</td><td>삼성</td><td>144</td><td>66</td><td>76</td><td>2</td><td>0.465</td><td>23.0</td><td>2승</td><td>3승 0무 2패</td></tr>
        <tr><td>8</td><td>롯데</td><td>144</td><td>64</td><td>76</td><td>4</td><td>0.457</td><td>24.0</td><td>1승</td><td>3승 0무 2패</td></tr>
        <tr><td>9</td><td>두산</td><td>144</td><td>60</td><td>82</td><td>2</td><td>0.423</td><td>29.0</td><td>2패</td><td>3승 0무 2패</td></tr>
        <tr><td>10</td><td>한화</td><td>144</td><td>46</td><td>96</td><td>2</td><td>0.324</td><td>43.0</td><td>1패</td><td>2승 0무 3패</td></tr>
      </tbody>
    </table>`,
  "2021": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>KT</td><td>144</td><td>76</td><td>59</td><td>9</td><td>0.563</td><td>0.0</td><td>1승</td><td>2승 1무 2패</td></tr>
        <tr><td>2</td><td>두산</td><td>144</td><td>71</td><td>65</td><td>8</td><td>0.522</td><td>5.5</td><td>2승</td><td>4승 0무 1패</td></tr>
        <tr><td>3</td><td>삼성</td><td>144</td><td>76</td><td>59</td><td>9</td><td>0.563</td><td>0.0</td><td>1승</td><td>2승 1무 2패</td></tr>
        <tr><td>4</td><td>LG</td><td>144</td><td>72</td><td>58</td><td>14</td><td>0.554</td><td>1.5</td><td>1패</td><td>3승 1무 1패</td></tr>
        <tr><td>5</td><td>키움</td><td>144</td><td>70</td><td>67</td><td>7</td><td>0.511</td><td>7.0</td><td>3승</td><td>4승 0무 1패</td></tr>
        <tr><td>6</td><td>SSG</td><td>144</td><td>66</td><td>64</td><td>14</td><td>0.508</td><td>7.5</td><td>1패</td><td>2승 1무 2패</td></tr>
        <tr class="topteam"><td>7</td><td>NC</td><td>144</td><td>67</td><td>68</td><td>9</td><td>0.496</td><td>9.0</td><td>1패</td><td>2승 1무 2패</td></tr>
        <tr><td>8</td><td>롯데</td><td>144</td><td>65</td><td>71</td><td>8</td><td>0.478</td><td>11.5</td><td>1승</td><td>1승 1무 3패</td></tr>
        <tr><td>9</td><td>KIA</td><td>144</td><td>58</td><td>76</td><td>10</td><td>0.433</td><td>17.5</td><td>2패</td><td>2승 0무 3패</td></tr>
        <tr><td>10</td><td>한화</td><td>144</td><td>49</td><td>83</td><td>12</td><td>0.371</td><td>25.5</td><td>6패</td><td>0승 1무 4패</td></tr>
      </tbody>
    </table>`,
  "2020": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>1</td><td>NC</td><td>144</td><td>83</td><td>55</td><td>6</td><td>0.601</td><td>0.0</td><td>1패</td><td>2승 1무 2패</td></tr>
        <tr><td>2</td><td>두산</td><td>144</td><td>79</td><td>61</td><td>4</td><td>0.564</td><td>5.0</td><td>4승</td><td>4승 0무 1패</td></tr>
        <tr><td>3</td><td>KT</td><td>144</td><td>81</td><td>62</td><td>1</td><td>0.566</td><td>4.5</td><td>1패</td><td>3승 0무 2패</td></tr>
        <tr><td>4</td><td>LG</td><td>144</td><td>79</td><td>61</td><td>4</td><td>0.564</td><td>5.0</td><td>2패</td><td>2승 1무 2패</td></tr>
        <tr><td>5</td><td>키움</td><td>144</td><td>80</td><td>63</td><td>1</td><td>0.559</td><td>5.5</td><td>1패</td><td>3승 0무 2패</td></tr>
        <tr><td>6</td><td>KIA</td><td>144</td><td>73</td><td>71</td><td>0</td><td>0.507</td><td>13.0</td><td>1승</td><td>2승 0무 3패</td></tr>
        <tr><td>7</td><td>롯데</td><td>144</td><td>71</td><td>72</td><td>1</td><td>0.497</td><td>14.5</td><td>1승</td><td>2승 0무 3패</td></tr>
        <tr><td>8</td><td>삼성</td><td>144</td><td>64</td><td>75</td><td>5</td><td>0.460</td><td>19.5</td><td>1승</td><td>2승 1무 2패</td></tr>
        <tr><td>9</td><td>SSG</td><td>144</td><td>51</td><td>92</td><td>1</td><td>0.357</td><td>34.5</td><td>1승</td><td>3승 0무 2패</td></tr>
        <tr><td>10</td><td>한화</td><td>144</td><td>46</td><td>95</td><td>3</td><td>0.326</td><td>38.5</td><td>1승</td><td>3승 0무 2패</td></tr>
      </tbody>
    </table>`,
  "2019": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>두산</td><td>144</td><td>88</td><td>55</td><td>1</td><td>0.615</td><td>0.0</td><td>5승</td><td>5승 0무 0패</td></tr>
        <tr><td>2</td><td>키움</td><td>144</td><td>86</td><td>57</td><td>1</td><td>0.601</td><td>2.0</td><td>2승</td><td>3승 0무 2패</td></tr>
        <tr><td>3</td><td>SSG</td><td>144</td><td>88</td><td>55</td><td>1</td><td>0.615</td><td>0.0</td><td>2승</td><td>4승 0무 1패</td></tr>
        <tr><td>4</td><td>LG</td><td>144</td><td>79</td><td>64</td><td>1</td><td>0.552</td><td>9.0</td><td>1승</td><td>2승 0무 3패</td></tr>
        <tr class="topteam"><td>5</td><td>NC</td><td>144</td><td>73</td><td>69</td><td>2</td><td>0.514</td><td>14.5</td><td>2패</td><td>1승 0무 4패</td></tr>
        <tr><td>6</td><td>KT</td><td>144</td><td>71</td><td>71</td><td>2</td><td>0.500</td><td>16.5</td><td>2승</td><td>4승 0무 1패</td></tr>
        <tr><td>7</td><td>KIA</td><td>144</td><td>62</td><td>80</td><td>2</td><td>0.437</td><td>25.5</td><td>3승</td><td>3승 0무 2패</td></tr>
        <tr><td>8</td><td>삼성</td><td>144</td><td>60</td><td>83</td><td>1</td><td>0.420</td><td>28.0</td><td>1패</td><td>1승 0무 4패</td></tr>
        <tr><td>9</td><td>한화</td><td>144</td><td>58</td><td>86</td><td>0</td><td>0.403</td><td>30.5</td><td>3패</td><td>2승 0무 3패</td></tr>
        <tr><td>10</td><td>롯데</td><td>144</td><td>48</td><td>93</td><td>3</td><td>0.340</td><td>39.0</td><td>8패</td><td>0승 0무 5패</td></tr>
      </tbody>
    </table>`,
  "2018": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>SSG</td><td>144</td><td>78</td><td>65</td><td>1</td><td>0.545</td><td>14.5</td><td>2패</td><td>2승 0무 3패</td></tr>
        <tr><td>2</td><td>두산</td><td>144</td><td>93</td><td>51</td><td>0</td><td>0.646</td><td>0.0</td><td>1승</td><td>3승 0무 2패</td></tr>
        <tr><td>3</td><td>한화</td><td>144</td><td>77</td><td>67</td><td>0</td><td>0.535</td><td>16.0</td><td>1승</td><td>2승 0무 3패</td></tr>
        <tr><td>4</td><td>키움</td><td>144</td><td>75</td><td>69</td><td>0</td><td>0.521</td><td>18.0</td><td>1패</td><td>3승 0무 2패</td></tr>
        <tr><td>5</td><td>KIA</td><td>144</td><td>70</td><td>74</td><td>0</td><td>0.486</td><td>23.0</td><td>1패</td><td>2승 0무 3패</td></tr>
        <tr><td>6</td><td>삼성</td><td>144</td><td>68</td><td>72</td><td>4</td><td>0.486</td><td>23.0</td><td>2승</td><td>3승 0무 2패</td></tr>
        <tr><td>7</td><td>롯데</td><td>144</td><td>68</td><td>74</td><td>2</td><td>0.479</td><td>24.0</td><td>1패</td><td>2승 0무 3패</td></tr>
        <tr><td>8</td><td>LG</td><td>144</td><td>68</td><td>75</td><td>1</td><td>0.476</td><td>24.5</td><td>2승</td><td>3승 0무 2패</td></tr>
        <tr><td>9</td><td>KT</td><td>144</td><td>59</td><td>82</td><td>3</td><td>0.418</td><td>32.5</td><td>1승</td><td>3승 0무 2패</td></tr>
        <tr class="topteam"><td>10</td><td>NC</td><td>144</td><td>58</td><td>85</td><td>1</td><td>0.406</td><td>34.5</td><td>3패</td><td>2승 0무 3패</td></tr>
      </tbody>
    </table>`,
  "2017": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>KIA</td><td>144</td><td>87</td><td>56</td><td>1</td><td>0.608</td><td>0.0</td><td>2승</td><td>4승 0무 1패</td></tr>
        <tr><td>2</td><td>두산</td><td>144</td><td>84</td><td>57</td><td>3</td><td>0.596</td><td>2.0</td><td>1패</td><td>3승 0무 2패</td></tr>
        <tr><td>3</td><td>롯데</td><td>144</td><td>80</td><td>62</td><td>2</td><td>0.563</td><td>6.5</td><td>5승</td><td>5승 0무 0패</td></tr>
        <tr class="topteam"><td>4</td><td>NC</td><td>144</td><td>79</td><td>62</td><td>3</td><td>0.560</td><td>7.0</td><td>4승</td><td>4승 1무 0패</td></tr>
        <tr><td>5</td><td>SSG</td><td>144</td><td>75</td><td>68</td><td>1</td><td>0.524</td><td>12.0</td><td>2승</td><td>4승 0무 1패</td></tr>
        <tr><td>6</td><td>LG</td><td>144</td><td>69</td><td>72</td><td>3</td><td>0.489</td><td>17.0</td><td>2패</td><td>2승 0무 3패</td></tr>
        <tr><td>7</td><td>키움</td><td>144</td><td>69</td><td>73</td><td>2</td><td>0.486</td><td>17.5</td><td>4패</td><td>1승 0무 4패</td></tr>
        <tr><td>8</td><td>한화</td><td>144</td><td>61</td><td>81</td><td>2</td><td>0.430</td><td>25.5</td><td>5패</td><td>0승 1무 4패</td></tr>
        <tr><td>9</td><td>삼성</td><td>144</td><td>55</td><td>84</td><td>5</td><td>0.396</td><td>30.0</td><td>2승</td><td>2승 0무 3패</td></tr>
        <tr><td>10</td><td>KT</td><td>144</td><td>50</td><td>94</td><td>0</td><td>0.347</td><td>37.5</td><td>2패</td><td>2승 0무 3패</td></tr>
      </tbody>
    </table>`,
  "2016": `<table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기수</th><th>승</th><th>패</th><th>무</th><th>승률</th><th>승차</th><th>연속</th><th>최근 5경기</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>두산</td><td>144</td><td>93</td><td>50</td><td>1</td><td>0.650</td><td>0.0</td><td>2승</td><td>3승 0무 2패</td></tr>
        <tr class="topteam"><td>2</td><td>NC</td><td>144</td><td>83</td><td>58</td><td>3</td><td>0.589</td><td>9.0</td><td>2패</td><td>2승 0무 3패</td></tr>
        <tr><td>3</td><td>키움</td><td>144</td><td>77</td><td>66</td><td>1</td><td>0.538</td><td>16.0</td><td>3패</td><td>2승 0무 3패</td></tr>
        <tr><td>4</td><td>LG</td><td>144</td><td>71</td><td>71</td><td>2</td><td>0.500</td><td>21.5</td><td>1패</td><td>2승 0무 3패</td></tr>
        <tr><td>5</td><td>KIA</td><td>144</td><td>70</td><td>73</td><td>1</td><td>0.490</td><td>23.0</td><td>2패</td><td>3승 0무 2패</td></tr>
        <tr><td>6</td><td>SSG</td><td>144</td><td>69</td><td>75</td><td>0</td><td>0.479</td><td>24.5</td><td>1승</td><td>4승 0무 1패</td></tr>
        <tr><td>7</td><td>한화</td><td>144</td><td>66</td><td>75</td><td>3</td><td>0.468</td><td>26.0</td><td>3승</td><td>4승 0무 1패</td></tr>
        <tr><td>8</td><td>롯데</td><td>144</td><td>66</td><td>78</td><td>0</td><td>0.458</td><td>27.5</td><td>2승</td><td>2승 0무 3패</td></tr>
        <tr><td>9</td><td>삼성</td><td>144</td><td>65</td><td>78</td><td>1</td><td>0.455</td><td>28.0</td><td>1패</td><td>2승 0무 3패</td></tr>
        <tr><td>10</td><td>KT</td><td>144</td><td>53</td><td>89</td><td>2</td><td>0.373</td><td>39.5</td><td>2승</td><td>2승 0무 3패</td></tr>
      </tbody>
    </table>`,
};

// 공격 기록
const attackData = {
  "2025": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>LG</td><td>144</td><td>5713</td><td>4919</td><td>788</td><td>1366</td><td>219</td><td>19</td><td>130</td><td>121</td><td>604</td><td>63</td><td>59</td><td>975</td><td>99</td><td class="drate">0.278</td><td>0.409</td><td>0.361</td></tr>
        <tr><td>2</td><td>삼성</td><td>144</td><td>5671</td><td>4899</td><td>775</td><td>1330</td><td>241</td><td>18</td><td>161</td><td>98</td><td>564</td><td>67</td><td>55</td><td>1087</td><td>106</td><td class="drate">0.271</td><td>0.427</td><td>0.353</td></tr>
        <tr><td>3</td><td>롯데</td><td>144</td><td>5682</td><td>4944</td><td>676</td><td>1318</td><td>242</td><td>26</td><td>75</td><td>91</td><td>530</td><td>72</td><td>45</td><td>1030</td><td>123</td><td class="drate">0.267</td><td>0.372</td><td>0.346</td></tr>
        <tr><td>4</td><td>한화</td><td>144</td><td>5547</td><td>4892</td><td>689</td><td>1303</td><td>250</td><td>16</td><td>116</td><td>101</td><td>439</td><td>79</td><td>46</td><td>1038</td><td>109</td><td class="drate">0.266</td><td>0.395</td><td>0.335</td></tr>
        <tr><td>5</td><td>두산</td><td>144</td><td>5581</td><td>4952</td><td>647</td><td>1298</td><td>232</td><td>31</td><td>102</td><td>144</td><td>469</td><td>53</td><td>42</td><td>1169</td><td>87</td><td class="drate">0.262</td><td>0.383</td><td>0.331</td></tr>
        <tr class="topteam"><td>6</td><td>NC</td><td>144</td><td>5570</td><td>4816</td><td>732</td><td>1254</td><td>221</td><td>31</td><td>128</td><td>186</td><td>504</td><td>62</td><td>52</td><td>1090</td><td>83</td><td class="drate">0.260</td><td>0.399</td><td>0.344</td></tr>
        <tr><td>7</td><td>KIA</td><td>144</td><td>5619</td><td>4944</td><td>668</td><td>1276</td><td>232</td><td>16</td><td>144</td><td>77</td><td>526</td><td>43</td><td>39</td><td>1211</td><td>96</td><td class="drate">0.258</td><td>0.399</td><td>0.335</td></tr>
        <tr><td>8</td><td>SSG</td><td>144</td><td>5517</td><td>4875</td><td>609</td><td>1249</td><td>175</td><td>14</td><td>127</td><td>129</td><td>493</td><td>52</td><td>37</td><td>1159</td><td>90</td><td class="drate">0.256</td><td>0.376</td><td>0.330</td></tr>
        <tr><td>9</td><td>KT</td><td>144</td><td>5588</td><td>4845</td><td>648</td><td>1228</td><td>214</td><td>17</td><td>104</td><td>48</td><td>555</td><td>65</td><td>43</td><td>1044</td><td>108</td><td class="drate">0.253</td><td>0.369</td><td>0.337</td></tr>
        <tr><td>10</td><td>키움</td><td>144</td><td>5508</td><td>4935</td><td>581</td><td>1202</td><td>217</td><td>20</td><td>104</td><td>83</td><td>439</td><td>38</td><td>33</td><td>1221</td><td>102</td><td class="drate">0.244</td><td>0.359</td><td>0.312</td></tr>
      </tbody>
    </table>
  `,
  "2024": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>KIA</td><td>144</td><td>5812</td><td>5124</td><td>858</td><td>1542</td><td>266</td><td>28</td><td>163</td><td>125</td><td>529</td><td>45</td><td>53</td><td>915</td><td>119</td><td class="drate">0.301</td><td>0.459</td><td>0.369</td></tr>
        <tr><td>2</td><td>롯데</td><td>144</td><td>5766</td><td>5110</td><td>802</td><td>1454</td><td>285</td><td>41</td><td>125</td><td>105</td><td>494</td><td>37</td><td>57</td><td>1079</td><td>100</td><td class="drate">0.285</td><td>0.430</td><td>0.352</td></tr>
        <tr><td>3</td><td>LG</td><td>144</td><td>5725</td><td>4919</td><td>808</td><td>1394</td><td>238</td><td>29</td><td>115</td><td>171</td><td>616</td><td>46</td><td>73</td><td>969</td><td>98</td><td class="drate">0.283</td><td>0.414</td><td>0.366</td></tr>
        <tr><td>4</td><td>KT</td><td>144</td><td>5808</td><td>5072</td><td>767</td><td>1413</td><td>234</td><td>16</td><td>145</td><td>61</td><td>580</td><td>62</td><td>45</td><td>1123</td><td>112</td><td class="drate">0.279</td><td>0.417</td><td>0.355</td></tr>
        <tr><td>5</td><td>두산</td><td>144</td><td>5680</td><td>4975</td><td>789</td><td>1375</td><td>243</td><td>21</td><td>150</td><td>184</td><td>510</td><td>55</td><td>59</td><td>1077</td><td>100</td><td class="drate">0.276</td><td>0.424</td><td>0.350</td></tr>
        <tr class="topteam"><td>6</td><td>NC</td><td>144</td><td>5757</td><td>5009</td><td>773</td><td>1371</td><td>226</td><td>15</td><td>172</td><td>104</td><td>513</td><td>50</td><td>57</td><td>1200</td><td>100</td><td class="drate">0.274</td><td>0.428</td><td>0.353</td></tr>
        <tr><td>7</td><td>SSG</td><td>144</td><td>5647</td><td>5001</td><td>756</td><td>1367</td><td>239</td><td>20</td><td>152</td><td>149</td><td>470</td><td>51</td><td>48</td><td>1095</td><td>85</td><td class="drate">0.273</td><td>0.420</td><td>0.342</td></tr>
        <tr><td>8</td><td>한화</td><td>144</td><td>5702</td><td>5005</td><td>745</td><td>1351</td><td>224</td><td>18</td><td>127</td><td>69</td><td>530</td><td>42</td><td>40</td><td>1077</td><td>109</td><td class="drate">0.270</td><td>0.398</td><td>0.347</td></tr>
        <tr><td>9</td><td>삼성</td><td>144</td><td>5697</td><td>4975</td><td>770</td><td>1336</td><td>204</td><td>17</td><td>185</td><td>113</td><td>531</td><td>57</td><td>47</td><td>1150</td><td>94</td><td class="drate">0.269</td><td>0.428</td><td>0.346</td></tr>
        <tr><td>10</td><td>키움</td><td>144</td><td>5671</td><td>5015</td><td>672</td><td>1326</td><td>222</td><td>24</td><td>104</td><td>71</td><td>492</td><td>37</td><td>49</td><td>1141</td><td>96</td><td class="drate">0.264</td><td>0.380</td><td>0.337</td></tr>
      </tbody>
    </table>
  `,
  "2023": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>LG</td><td>144</td><td>5687</td><td>4881</td><td>767</td><td>1364</td><td>227</td><td>27</td><td>93</td><td>166</td><td>583</td><td>94</td><td>55</td><td>804</td><td>89</td><td class="drate">0.279</td><td>0.394</td><td>0.361</td></tr>
        <tr><td>2</td><td>KIA</td><td>144</td><td>5607</td><td>4954</td><td>726</td><td>1365</td><td>224</td><td>21</td><td>101</td><td>122</td><td>500</td><td>63</td><td>44</td><td>957</td><td>115</td><td class="drate">0.276</td><td>0.390</td><td>0.345</td></tr>
        <tr class="topteam"><td>3</td><td>NC</td><td>144</td><td>5606</td><td>4895</td><td>679</td><td>1321</td><td>223</td><td>28</td><td>98</td><td>111</td><td>493</td><td>63</td><td>55</td><td>1005</td><td>122</td><td class="drate">0.270</td><td>0.387</td><td>0.345</td></tr>
        <tr><td>4</td><td>KT</td><td>144</td><td>5649</td><td>4973</td><td>672</td><td>1316</td><td>235</td><td>14</td><td>89</td><td>87</td><td>524</td><td>57</td><td>47</td><td>1074</td><td>96</td><td class="drate">0.265</td><td>0.371</td><td>0.338</td></tr>
        <tr><td>5</td><td>롯데</td><td>144</td><td>5576</td><td>4871</td><td>653</td><td>1289</td><td>231</td><td>19</td><td>69</td><td>101</td><td>522</td><td>75</td><td>57</td><td>1000</td><td>110</td><td class="drate">0.265</td><td>0.362</td><td>0.338</td></tr>
        <tr><td>6</td><td>삼성</td><td>144</td><td>5581</td><td>4912</td><td>636</td><td>1290</td><td>208</td><td>23</td><td>88</td><td>103</td><td>487</td><td>77</td><td>43</td><td>954</td><td>114</td><td class="drate">0.263</td><td>0.368</td><td>0.334</td></tr>
        <tr><td>7</td><td>키움</td><td>144</td><td>5729</td><td>5062</td><td>607</td><td>1323</td><td>223</td><td>30</td><td>61</td><td>54</td><td>484</td><td>51</td><td>58</td><td>1096</td><td>87</td><td class="drate">0.261</td><td>0.353</td><td>0.331</td></tr>
        <tr><td>8</td><td>SSG</td><td>144</td><td>5630</td><td>4923</td><td>658</td><td>1279</td><td>229</td><td>16</td><td>125</td><td>96</td><td>507</td><td>77</td><td>45</td><td>943</td><td>89</td><td class="drate">0.260</td><td>0.389</td><td>0.336</td></tr>
        <tr><td>9</td><td>두산</td><td>144</td><td>5538</td><td>4859</td><td>620</td><td>1238</td><td>210</td><td>32</td><td>100</td><td>133</td><td>505</td><td>57</td><td>41</td><td>975</td><td>90</td><td class="drate">0.255</td><td>0.373</td><td>0.332</td></tr>
        <tr><td>10</td><td>한화</td><td>144</td><td>5628</td><td>4906</td><td>604</td><td>1184</td><td>211</td><td>12</td><td>100</td><td>67</td><td>535</td><td>59</td><td>40</td><td>1162</td><td>103</td><td class="drate">0.241</td><td>0.350</td><td>0.324</td></tr>
      </tbody>
    </table>
  `,
  "2022": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>KIA</td><td>144</td><td>5703</td><td>5000</td><td>720</td><td>1361</td><td>250</td><td>19</td><td>113</td><td>103</td><td>542</td><td>61</td><td>36</td><td>983</td><td>111</td><td class="drate">0.272</td><td>0.398</td><td>0.349</td></tr>
        <tr><td>2</td><td>삼성</td><td>144</td><td>5647</td><td>5023</td><td>663</td><td>1358</td><td>241</td><td>19</td><td>103</td><td>91</td><td>446</td><td>83</td><td>41</td><td>1029</td><td>119</td><td class="drate">0.270</td><td>0.387</td><td>0.334</td></tr>
        <tr><td>3</td><td>LG</td><td>144</td><td>5627</td><td>4927</td><td>715</td><td>1325</td><td>208</td><td>33</td><td>118</td><td>102</td><td>501</td><td>49</td><td>46</td><td>924</td><td>109</td><td class="drate">0.269</td><td>0.396</td><td>0.346</td></tr>
        <tr><td>4</td><td>롯데</td><td>144</td><td>5534</td><td>4948</td><td>605</td><td>1320</td><td>227</td><td>16</td><td>106</td><td>61</td><td>417</td><td>73</td><td>42</td><td>991</td><td>127</td><td class="drate">0.267</td><td>0.383</td><td>0.328</td></tr>
        <tr class="topteam"><td>5</td><td>NC</td><td>144</td><td>5585</td><td>4899</td><td>646</td><td>1260</td><td>230</td><td>15</td><td>105</td><td>100</td><td>501</td><td>50</td><td>47</td><td>981</td><td>112</td><td class="drate">0.257</td><td>0.375</td><td>0.334</td></tr>
        <tr><td>6</td><td>두산</td><td>144</td><td>5510</td><td>4891</td><td>638</td><td>1249</td><td>210</td><td>12</td><td>101</td><td>90</td><td>450</td><td>53</td><td>45</td><td>1007</td><td>116</td><td class="drate">0.255</td><td>0.365</td><td>0.324</td></tr>
        <tr><td>7</td><td>KT</td><td>144</td><td>5547</td><td>4864</td><td>631</td><td>1237</td><td>192</td><td>19</td><td>119</td><td>89</td><td>519</td><td>70</td><td>44</td><td>1183</td><td>105</td><td class="drate">0.254</td><td>0.375</td><td>0.330</td></tr>
        <tr><td>8</td><td>SSG</td><td>144</td><td>5642</td><td>4893</td><td>720</td><td>1245</td><td>242</td><td>18</td><td>138</td><td>98</td><td>530</td><td>77</td><td>47</td><td>1075</td><td>96</td><td class="drate">0.254</td><td>0.396</td><td>0.336</td></tr>
        <tr><td>9</td><td>키움</td><td>144</td><td>5655</td><td>4953</td><td>621</td><td>1250</td><td>203</td><td>33</td><td>94</td><td>63</td><td>527</td><td>49</td><td>34</td><td>1032</td><td>89</td><td class="drate">0.252</td><td>0.364</td><td>0.333</td></tr>
        <tr><td>10</td><td>한화</td><td>144</td><td>5513</td><td>4878</td><td>564</td><td>1196</td><td>217</td><td>19</td><td>88</td><td>93</td><td>497</td><td>45</td><td>40</td><td>1264</td><td>92</td><td class="drate">0.245</td><td>0.352</td><td>0.319</td></tr>
      </tbody>
    </table>
  `,
  "2021": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>롯데</td><td>144</td><td>5726</td><td>5009</td><td>727</td><td>1393</td><td>266</td><td>10</td><td>107</td><td>60</td><td>579</td><td>38</td><td>46</td><td>969</td><td>114</td><td class="drate">0.278</td><td>0.399</td><td>0.356</td></tr>
        <tr><td>2</td><td>두산</td><td>144</td><td>5645</td><td>4900</td><td>738</td><td>1314</td><td>235</td><td>17</td><td>110</td><td>81</td><td>560</td><td>46</td><td>53</td><td>943</td><td>137</td><td class="drate">0.268</td><td>0.390</td><td>0.350</td></tr>
        <tr><td>3</td><td>삼성</td><td>144</td><td>5552</td><td>4836</td><td>712</td><td>1292</td><td>204</td><td>18</td><td>133</td><td>116</td><td>545</td><td>48</td><td>68</td><td>902</td><td>98</td><td class="drate">0.267</td><td>0.399</td><td>0.344</td></tr>
        <tr><td>4</td><td>KT</td><td>144</td><td>5627</td><td>4810</td><td>719</td><td>1276</td><td>219</td><td>11</td><td>106</td><td>112</td><td>645</td><td>69</td><td>44</td><td>1047</td><td>105</td><td class="drate">0.265</td><td>0.381</td><td>0.356</td></tr>
        <tr class="topteam"><td>5</td><td>NC</td><td>144</td><td>5532</td><td>4808</td><td>702</td><td>1254</td><td>203</td><td>17</td><td>170</td><td>101</td><td>511</td><td>59</td><td>43</td><td>1093</td><td>94</td><td class="drate">0.261</td><td>0.416</td><td>0.343</td></tr>
        <tr><td>6</td><td>SSG</td><td>144</td><td>5736</td><td>4899</td><td>755</td><td>1278</td><td>204</td><td>13</td><td>185</td><td>100</td><td>637</td><td>55</td><td>52</td><td>1056</td><td>106</td><td class="drate">0.261</td><td>0.421</td><td>0.353</td></tr>
        <tr><td>7</td><td>키움</td><td>144</td><td>5653</td><td>4874</td><td>722</td><td>1262</td><td>244</td><td>28</td><td>91</td><td>97</td><td>595</td><td>35</td><td>56</td><td>1053</td><td>93</td><td class="drate">0.259</td><td>0.376</td><td>0.347</td></tr>
        <tr><td>8</td><td>LG</td><td>144</td><td>5533</td><td>4750</td><td>654</td><td>1188</td><td>210</td><td>11</td><td>110</td><td>92</td><td>592</td><td>52</td><td>45</td><td>926</td><td>102</td><td class="drate">0.250</td><td>0.368</td><td>0.342</td></tr>
        <tr><td>9</td><td>KIA</td><td>144</td><td>5577</td><td>4831</td><td>568</td><td>1198</td><td>183</td><td>21</td><td>66</td><td>73</td><td>595</td><td>41</td><td>37</td><td>921</td><td>119</td><td class="drate">0.248</td><td>0.336</td><td>0.337</td></tr>
        <tr><td>10</td><td>한화</td><td>144</td><td>5495</td><td>4685</td><td>599</td><td>1111</td><td>213</td><td>17</td><td>80</td><td>109</td><td>633</td><td>54</td><td>49</td><td>1286</td><td>110</td><td class="drate">0.237</td><td>0.341</td><td>0.334</td></tr>
      </tbody>
    </table>
  `,
  "2020": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>두산</td><td>144</td><td>5776</td><td>5046</td><td>816</td><td>1477</td><td>263</td><td>20</td><td>125</td><td>88</td><td>551</td><td>38</td><td>73</td><td>796</td><td>132</td><td class="drate">0.293</td><td>0.427</td><td>0.365</td></tr>
        <tr class="topteam"><td>2</td><td>NC</td><td>144</td><td>5833</td><td>5102</td><td>888</td><td>1483</td><td>258</td><td>28</td><td>187</td><td>101</td><td>529</td><td>46</td><td>51</td><td>997</td><td>106</td><td class="drate">0.291</td><td>0.462</td><td>0.366</td></tr>
        <tr><td>3</td><td>KT</td><td>144</td><td>5762</td><td>5047</td><td>813</td><td>1432</td><td>238</td><td>21</td><td>163</td><td>106</td><td>554</td><td>64</td><td>45</td><td>1097</td><td>104</td><td class="drate">0.284</td><td>0.436</td><td>0.358</td></tr>
        <tr><td>4</td><td>LG</td><td>144</td><td>5681</td><td>4999</td><td>802</td><td>1384</td><td>253</td><td>29</td><td>149</td><td>83</td><td>509</td><td>49</td><td>49</td><td>969</td><td>115</td><td class="drate">0.277</td><td>0.428</td><td>0.349</td></tr>
        <tr><td>5</td><td>롯데</td><td>144</td><td>5669</td><td>4958</td><td>750</td><td>1366</td><td>252</td><td>6</td><td>131</td><td>90</td><td>569</td><td>39</td><td>48</td><td>875</td><td>148</td><td class="drate">0.276</td><td>0.408</td><td>0.353</td></tr>
        <tr><td>6</td><td>KIA</td><td>144</td><td>5642</td><td>4937</td><td>724</td><td>1355</td><td>224</td><td>13</td><td>130</td><td>47</td><td>535</td><td>63</td><td>38</td><td>957</td><td>114</td><td class="drate">0.274</td><td>0.404</td><td>0.351</td></tr>
        <tr><td>7</td><td>키움</td><td>144</td><td>5721</td><td>4945</td><td>759</td><td>1332</td><td>254</td><td>25</td><td>127</td><td>113</td><td>608</td><td>43</td><td>52</td><td>1030</td><td>107</td><td class="drate">0.269</td><td>0.408</td><td>0.355</td></tr>
        <tr><td>8</td><td>삼성</td><td>144</td><td>5574</td><td>4923</td><td>699</td><td>1317</td><td>211</td><td>12</td><td>129</td><td>132</td><td>486</td><td>50</td><td>53</td><td>990</td><td>117</td><td class="drate">0.268</td><td>0.394</td><td>0.338</td></tr>
        <tr><td>9</td><td>SSG</td><td>144</td><td>5502</td><td>4839</td><td>634</td><td>1212</td><td>177</td><td>17</td><td>143</td><td>81</td><td>511</td><td>49</td><td>34</td><td>981</td><td>112</td><td class="drate">0.250</td><td>0.383</td><td>0.329</td></tr>
        <tr><td>10</td><td>한화</td><td>144</td><td>5483</td><td>4862</td><td>551</td><td>1189</td><td>195</td><td>12</td><td>79</td><td>51</td><td>462</td><td>45</td><td>25</td><td>1163</td><td>119</td><td class="drate">0.245</td><td>0.338</td><td>0.320</td></tr>
      </tbody>
    </table>
  `,
  "2019": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>키움</td><td>144</td><td>5658</td><td>4991</td><td>780</td><td>1405</td><td>251</td><td>38</td><td>112</td><td>110</td><td>514</td><td>36</td><td>48</td><td>943</td><td>122</td><td class="drate">0.282</td><td>0.414</td><td>0.354</td></tr>
        <tr class="topteam"><td>2</td><td>NC</td><td>144</td><td>5631</td><td>4968</td><td>674</td><td>1383</td><td>249</td><td>26</td><td>128</td><td>87</td><td>456</td><td>64</td><td>60</td><td>880</td><td>126</td><td class="drate">0.278</td><td>0.416</td><td>0.345</td></tr>
        <tr><td>3</td><td>두산</td><td>144</td><td>5670</td><td>4913</td><td>736</td><td>1364</td><td>235</td><td>31</td><td>84</td><td>102</td><td>563</td><td>39</td><td>83</td><td>799</td><td>117</td><td class="drate">0.278</td><td>0.389</td><td>0.355</td></tr>
        <tr><td>4</td><td>KT</td><td>144</td><td>5582</td><td>4965</td><td>650</td><td>1375</td><td>187</td><td>20</td><td>103</td><td>104</td><td>475</td><td>45</td><td>45</td><td>975</td><td>113</td><td class="drate">0.277</td><td>0.385</td><td>0.344</td></tr>
        <tr><td>5</td><td>LG</td><td>144</td><td>5536</td><td>4928</td><td>641</td><td>1316</td><td>233</td><td>15</td><td>94</td><td>108</td><td>434</td><td>49</td><td>48</td><td>962</td><td>117</td><td class="drate">0.267</td><td>0.378</td><td>0.333</td></tr>
        <tr><td>6</td><td>KIA</td><td>144</td><td>5505</td><td>4874</td><td>605</td><td>1286</td><td>248</td><td>19</td><td>76</td><td>87</td><td>497</td><td>31</td><td>45</td><td>919</td><td>108</td><td class="drate">0.264</td><td>0.369</td><td>0.336</td></tr>
        <tr><td>7</td><td>SSG</td><td>144</td><td>5542</td><td>4919</td><td>655</td><td>1290</td><td>218</td><td>14</td><td>117</td><td>118</td><td>462</td><td>35</td><td>38</td><td>966</td><td>92</td><td class="drate">0.262</td><td>0.384</td><td>0.334</td></tr>
        <tr><td>8</td><td>한화</td><td>144</td><td>5482</td><td>4882</td><td>607</td><td>1250</td><td>223</td><td>16</td><td>88</td><td>105</td><td>441</td><td>44</td><td>45</td><td>1090</td><td>112</td><td class="drate">0.256</td><td>0.362</td><td>0.324</td></tr>
        <tr><td>9</td><td>삼성</td><td>144</td><td>5533</td><td>4866</td><td>622</td><td>1245</td><td>230</td><td>26</td><td>122</td><td>107</td><td>478</td><td>58</td><td>53</td><td>976</td><td>107</td><td class="drate">0.256</td><td>0.389</td><td>0.329</td></tr>
        <tr><td>10</td><td>롯데</td><td>144</td><td>5488</td><td>4919</td><td>578</td><td>1231</td><td>214</td><td>22</td><td>90</td><td>65</td><td>429</td><td>35</td><td>40</td><td>1085</td><td>108</td><td class="drate">0.250</td><td>0.358</td><td>0.316</td></tr>
      </tbody>
    </table>
  `,
  "2018": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>두산</td><td>144</td><td>5870</td><td>5176</td><td>944</td><td>1601</td><td>284</td><td>30</td><td>191</td><td>96</td><td>496</td><td>43</td><td>63</td><td>1016</td><td>112</td><td class="drate">0.309</td><td>0.486</td><td>0.376</td></tr>
        <tr><td>2</td><td>KIA</td><td>144</td><td>5744</td><td>5036</td><td>865</td><td>1487</td><td>258</td><td>22</td><td>170</td><td>88</td><td>503</td><td>56</td><td>50</td><td>905</td><td>135</td><td class="drate">0.295</td><td>0.457</td><td>0.367</td></tr>
        <tr><td>3</td><td>LG</td><td>144</td><td>5665</td><td>5070</td><td>788</td><td>1487</td><td>299</td><td>12</td><td>148</td><td>71</td><td>418</td><td>51</td><td>51</td><td>1001</td><td>125</td><td class="drate">0.293</td><td>0.445</td><td>0.353</td></tr>
        <tr><td>4</td><td>롯데</td><td>144</td><td>5764</td><td>5130</td><td>821</td><td>1484</td><td>289</td><td>17</td><td>203</td><td>68</td><td>471</td><td>45</td><td>37</td><td>1157</td><td>124</td><td class="drate">0.289</td><td>0.471</td><td>0.356</td></tr>
        <tr><td>5</td><td>삼성</td><td>144</td><td>5766</td><td>5109</td><td>776</td><td>1471</td><td>241</td><td>29</td><td>146</td><td>116</td><td>468</td><td>57</td><td>45</td><td>1034</td><td>115</td><td class="drate">0.288</td><td>0.432</td><td>0.355</td></tr>
        <tr><td>6</td><td>키움</td><td>144</td><td>5780</td><td>5141</td><td>825</td><td>1481</td><td>288</td><td>19</td><td>165</td><td>101</td><td>472</td><td>32</td><td>50</td><td>1208</td><td>93</td><td class="drate">0.288</td><td>0.448</td><td>0.355</td></tr>
        <tr><td>7</td><td>SSG</td><td>144</td><td>5682</td><td>4992</td><td>829</td><td>1403</td><td>234</td><td>13</td><td>233</td><td>108</td><td>483</td><td>54</td><td>34</td><td>1079</td><td>103</td><td class="drate">0.281</td><td>0.473</td><td>0.356</td></tr>
        <tr><td>8</td><td>한화</td><td>144</td><td>5539</td><td>4972</td><td>729</td><td>1369</td><td>249</td><td>14</td><td>151</td><td>118</td><td>420</td><td>31</td><td>28</td><td>1098</td><td>113</td><td class="drate">0.275</td><td>0.422</td><td>0.341</td></tr>
        <tr><td>9</td><td>KT</td><td>144</td><td>5605</td><td>5026</td><td>757</td><td>1382</td><td>264</td><td>13</td><td>206</td><td>80</td><td>464</td><td>43</td><td>26</td><td>1109</td><td>103</td><td class="drate">0.275</td><td>0.456</td><td>0.340</td></tr>
        <tr class="topteam"><td>10</td><td>NC</td><td>144</td><td>5488</td><td>4895</td><td>660</td><td>1280</td><td>233</td><td>18</td><td>143</td><td>82</td><td>427</td><td>35</td><td>43</td><td>1081</td><td>115</td><td class="drate">0.261</td><td>0.404</td><td>0.329</td></tr>
      </tbody>
    </table>
  `,
  "2017": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>KIA</td><td>144</td><td>5841</td><td>5142</td><td>906</td><td>1554</td><td>292</td><td>29</td><td>170</td><td>76</td><td>499</td><td>55</td><td>56</td><td>891</td><td>117</td><td class="drate">0.302</td><td>0.469</td><td>0.370</td></tr>
        <tr><td>2</td><td>두산</td><td>144</td><td>5833</td><td>5102</td><td>849</td><td>1499</td><td>270</td><td>20</td><td>178</td><td>69</td><td>541</td><td>48</td><td>47</td><td>960</td><td>120</td><td class="drate">0.294</td><td>0.459</td><td>0.369</td></tr>
        <tr class="topteam"><td>3</td><td>NC</td><td>144</td><td>5790</td><td>5079</td><td>786</td><td>1489</td><td>277</td><td>19</td><td>149</td><td>93</td><td>471</td><td>62</td><td>48</td><td>979</td><td>119</td><td class="drate">0.293</td><td>0.443</td><td>0.365</td></tr>
        <tr><td>4</td><td>키움</td><td>144</td><td>5712</td><td>5098</td><td>789</td><td>1479</td><td>267</td><td>30</td><td>141</td><td>70</td><td>468</td><td>21</td><td>42</td><td>1066</td><td>129</td><td class="drate">0.290</td><td>0.437</td><td>0.357</td></tr>
        <tr><td>5</td><td>한화</td><td>144</td><td>5665</td><td>5030</td><td>737</td><td>1445</td><td>261</td><td>16</td><td>150</td><td>64</td><td>416</td><td>85</td><td>38</td><td>974</td><td>112</td><td class="drate">0.287</td><td>0.435</td><td>0.350</td></tr>
        <tr><td>6</td><td>롯데</td><td>144</td><td>5671</td><td>4994</td><td>743</td><td>1425</td><td>250</td><td>17</td><td>151</td><td>92</td><td>457</td><td>76</td><td>32</td><td>1018</td><td>146</td><td class="drate">0.285</td><td>0.433</td><td>0.356</td></tr>
        <tr><td>7</td><td>LG</td><td>144</td><td>5614</td><td>4944</td><td>699</td><td>1390</td><td>216</td><td>20</td><td>110</td><td>77</td><td>438</td><td>76</td><td>55</td><td>1021</td><td>123</td><td class="drate">0.281</td><td>0.400</td><td>0.348</td></tr>
        <tr><td>8</td><td>삼성</td><td>144</td><td>5707</td><td>5095</td><td>757</td><td>1419</td><td>255</td><td>36</td><td>145</td><td>98</td><td>429</td><td>58</td><td>55</td><td>983</td><td>97</td><td class="drate">0.279</td><td>0.428</td><td>0.340</td></tr>
        <tr><td>9</td><td>KT</td><td>144</td><td>5485</td><td>4937</td><td>655</td><td>1360</td><td>274</td><td>17</td><td>119</td><td>86</td><td>374</td><td>62</td><td>45</td><td>1017</td><td>118</td><td class="drate">0.275</td><td>0.410</td><td>0.332</td></tr>
        <tr><td>10</td><td>SSG</td><td>144</td><td>5564</td><td>4925</td><td>761</td><td>1337</td><td>222</td><td>15</td><td>234</td><td>53</td><td>427</td><td>57</td><td>41</td><td>1100</td><td>97</td><td class="drate">0.271</td><td>0.465</td><td>0.341</td></tr>
      </tbody>
    </table>
  `,
  "2016": `
    <table>
      <thead>
        <tr><th>순위</th><th>팀명</th><th>경기</th><th>타석</th><th>타수</th><th>득점</th><th>안타</th><th>2루타</th><th>3루타</th><th>홈런</th><th>도루</th><th>볼넷</th><th>희번</th><th>희플</th><th>삼진</th><th>병살</th><th>타율</th><th>장타율</th><th>출루율</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>두산</td><td>144</td><td>5841</td><td>5044</td><td>935</td><td>1504</td><td>284</td><td>25</td><td>183</td><td>85</td><td>600</td><td>43</td><td>68</td><td>884</td><td>121</td><td class="drate">0.298</td><td>0.473</td><td>0.378</td></tr>
        <tr><td>2</td><td>삼성</td><td>144</td><td>5863</td><td>5093</td><td>852</td><td>1492</td><td>249</td><td>34</td><td>142</td><td>104</td><td>552</td><td>88</td><td>55</td><td>864</td><td>119</td><td class="drate">0.293</td><td>0.439</td><td>0.367</td></tr>
        <tr><td>3</td><td>키움</td><td>144</td><td>5702</td><td>4990</td><td>813</td><td>1464</td><td>254</td><td>39</td><td>134</td><td>154</td><td>556</td><td>34</td><td>59</td><td>956</td><td>121</td><td class="drate">0.293</td><td>0.440</td><td>0.368</td></tr>
        <tr class="topteam"><td>4</td><td>NC</td><td>144</td><td>5833</td><td>5007</td><td>857</td><td>1457</td><td>249</td><td>19</td><td>169</td><td>99</td><td>609</td><td>70</td><td>52</td><td>1023</td><td>133</td><td class="drate">0.291</td><td>0.450</td><td>0.375</td></tr>
        <tr><td>5</td><td>SSG</td><td>144</td><td>5672</td><td>5023</td><td>753</td><td>1464</td><td>234</td><td>19</td><td>182</td><td>89</td><td>429</td><td>71</td><td>47</td><td>1018</td><td>104</td><td class="drate">0.291</td><td>0.454</td><td>0.356</td></tr>
        <tr><td>6</td><td>LG</td><td>144</td><td>5765</td><td>5051</td><td>786</td><td>1464</td><td>238</td><td>26</td><td>118</td><td>121</td><td>523</td><td>65</td><td>54</td><td>982</td><td>92</td><td class="drate">0.290</td><td>0.417</td><td>0.361</td></tr>
        <tr><td>7</td><td>한화</td><td>144</td><td>5838</td><td>5109</td><td>826</td><td>1478</td><td>242</td><td>27</td><td>142</td><td>64</td><td>510</td><td>87</td><td>41</td><td>1025</td><td>123</td><td class="drate">0.289</td><td>0.431</td><td>0.362</td></tr>
        <tr><td>8</td><td>롯데</td><td>144</td><td>5784</td><td>5001</td><td>777</td><td>1439</td><td>252</td><td>20</td><td>127</td><td>145</td><td>596</td><td>62</td><td>41</td><td>1061</td><td>120</td><td class="drate">0.288</td><td>0.422</td><td>0.370</td></tr>
        <tr><td>9</td><td>KIA</td><td>144</td><td>5696</td><td>4999</td><td>803</td><td>1429</td><td>264</td><td>28</td><td>170</td><td>101</td><td>499</td><td>66</td><td>45</td><td>997</td><td>109</td><td class="drate">0.286</td><td>0.452</td><td>0.358</td></tr>
        <tr><td>10</td><td>KT</td><td>144</td><td>5620</td><td>4963</td><td>672</td><td>1369</td><td>214</td><td>11</td><td>116</td><td>96</td><td>499</td><td>65</td><td>45</td><td>933</td><td>130</td><td class="drate">0.276</td><td>0.394</td><td>0.345</td></tr>
      </tbody>
    </table>
  `,

};

// 수비 기록
const defenseData = {
"2025": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr><td>1</td><td>한화</td><td>144</td><td>83</td><td>57</td><td class="">41</td><td>57</td><td>0.593</td><td>1290 ⅓</td><td>1185</td><td>102</td><td>450</td><td>93</td><td>1339</td><td>554</td><td>510</td><td>86</td><td class="drate">3.56</td><td>1.27</td></tr>
        <tr><td>2</td><td>SSG</td><td>144</td><td>75</td><td>65</td><td class="">36</td><td>102</td><td>0.536</td><td>1283 ⅓</td> <td>1164</td><td>115</td><td>510</td><td>78</td><td>1193</td><td>576</td><td>518</td><td>106</td><td class="drate">3.63</td><td>1.3</td></tr>
        <tr><td>3</td><td>LG</td><td>144</td><td>85</td><td>56</td><td class="">42</td><td>77</td><td>0.603</td><td>1279 ⅓</td><td>1236</td><td>91</td><td>491</td><td>62</td><td>1080</td><td>584</td><td>541</td><td>92</td><td class="drate">3.81</td><td>1.35</td></tr>
        <tr><td>4</td><td>삼성</td><td>144</td><td>74</td><td>68</td><td class="">25</td><td>76</td><td>0.521</td><td>1268 ⅔</td><td>1257</td><td>132</td><td>455</td><td>70</td><td>1048</td><td>647</td><td>581</td><td>87</td><td class="drate">4.12</td><td>1.35</td></tr>
        <tr><td>5</td><td>두산</td><td>144</td><td>61</td><td>77</td><td class="">29</td><td>69</td><td>0.442</td><td>1280</td><td>1227</td><td>109</td><td>542</td><td>99</td><td>1054</td><td>686</td><td>612</td><td>120</td><td class="drate">4.30</td><td>1.38</td></tr>
        <tr><td>6</td><td>KT</td><td>144</td><td>71</td><td>68</td><td class="">37</td><td>60</td><td>0.511</td><td>1278 ⅓</td><td>1362</td><td>112</td><td>433</td><td>58</td><td>1067</td><td>657</td><td>583</td><td>103</td><td class="drate">4.10</td><td>1.4</td></tr>
        <tr><td>7</td><td>KIA</td><td>144</td><td>65</td><td>75</td><td class="">30</td><td>82</td><td>0.464</td><td>1274 ⅔</td><td>1316</td><td>110</td><td>511</td><td>84</td><td>1058</td><td>734</td><td>662</td><td>123</td><td class="drate">4.67</td><td>1.43</td></tr>
        <tr><td>8</td><td>롯데</td><td>144</td><td>66</td><td>72</td><td class="">36</td><td>69</td><td>0.478</td><td>1280</td><td>1351</td><td>128</td><td>560</td><td>73</td><td>1173</td><td>749</td><td>680</td><td>111</td><td class="drate">4.78</td><td>1.49</td></tr>
        <tr class="topteam"><td>9</td><td>NC</td><td>144</td><td>71</td><td>67</td><td class="">39</td><td>103</td><td>0.514</td><td>1270</td><td>1279</td><td>146</td><td>621</td><td>97</td><td>1075</td><td>766</td><td>684</td><td>116</td><td class="drate">4.85</td><td>1.5</td></tr>
        <tr><td>10</td><td>키움</td><td>144</td><td>47</td><td>93</td><td class="">31</td><td>55</td><td>0.336</td><td>1269</td><td>1447</td><td>146</td><td>550</td><td>92</td><td>937</td><td>860</td><td>764</td><td>119</td><td  class="drate">5.42</td><td>1.57</td></tr>
      </tbody>
    </table>
  `,
"2024": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr><td>1</td><td>삼성</td><td>144</td><td>78</td><td>64</td><td class="">41</td><td>116</td><td>0.549</td><td>1282 ⅔</td><td>1384</td><td>164</td><td>477</td><td>81</td><td>980</td><td>719</td><td>669</td><td>81</td><td class="drate">4.69</td><td>1.45</td></tr>
        <tr><td>2</td><td>KT</td><td>144</td><td>72</td><td>70</td><td class="">28</td><td>50</td><td>0.507</td><td>1284 ⅓</td><td>1448</td><td>155</td><td>443</td><td>65</td><td>1118</td><td>804</td><td>732</td><td>116</td><td class="drate">5.13</td><td>1.47</td></tr>
        <tr><td>3</td><td>KIA</td><td>144</td><td>87</td><td>55</td><td class="">44</td><td>89</td><td>0.613</td><td>1288</td><td>1365</td><td>141</td><td>539</td><td>85</td><td>1125</td><td>759</td><td>643</td><td>146</td><td class="drate">4.49</td><td>1.48</td></tr>
        <tr><td>4</td><td>LG</td><td>144</td><td>76</td><td>66</td><td class="">34</td><td>65</td><td>0.535</td><td>1277</td><td>1375</td><td>126</td><td>529</td><td>80</td><td>1082</td><td>728</td><td>659</td><td>102</td><td class="drate">4.64</td><td>1.49</td></tr>
        <tr><td>5</td><td>두산</td><td>144</td><td>74</td><td>68</td><td class="">41</td><td>87</td><td>0.521</td><td>1283 ⅔</td><td>1332</td><td>135</td><td>585</td><td>92</td><td>1083</td><td>748</td><td>688</td><td>84</td><td class="drate">4.82</td><td>1.49</td></tr>
        <tr><td>6</td><td>키움</td><td>144</td><td>58</td><td>86</td><td class="">23</td><td>48</td><td>0.403</td><td>1272 ⅔</td><td>1416</td><td>150</td><td>497</td><td>88</td><td>921</td><td>796</td><td>735</td><td>104</td><td class="drate">5.20</td><td>1.5</td></tr>
        <tr class="topteam"><td>7</td><td>NC</td><td>144</td><td>61</td><td>81</td><td class="">22</td><td>65</td><td>0.430</td><td>1275 ⅔</td><td>1389</td><td>137</td><td>531</td><td>67</td><td>1061</td><td>801</td><td>716</td><td>108</td><td class="drate">5.05</td><td>1.51</td></tr>
        <tr><td>8</td><td>한화</td><td>144</td><td>66</td><td>76</td><td class="">26</td><td>68</td><td>0.465</td><td>1274 ⅔</td><td>1437</td><td>128</td><td>511</td><td>76</td><td>1130</td><td>780</td><td>709</td><td>105</td><td class="drate">5.01</td><td>1.53</td></tr>
        <tr><td>9</td><td>롯데</td><td>144</td><td>66</td><td>74</td><td class="">30</td><td>58</td><td>0.471</td><td>1280 ⅔</td><td>1442</td><td>139</td><td>523</td><td>75</td><td>1131</td><td>791</td><td>725</td><td>123</td><td class="drate">5.10</td><td>1.53</td></tr>
        <tr><td>10</td><td>SSG</td><td>144</td><td>72</td><td>70</td><td class="">33</td><td>80</td><td>0.507</td><td>1269 ⅔</td><td>1341</td><td>163</td><td>630</td><td>74</td><td>1195</td><td>814</td><td>742</td><td>119</td><td class="drate">5.26</td><td>1.55</td></tr>
      </tbody>
    </table>
  `,
"2023": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr class="topteam"><td>1</td><td>NC</td><td>144</td><td>75</td><td>67</td><td class="">33</td><td>88</td><td>0.528</td><td>1281 ⅓</td><td>1160</td><td>99</td><td>513</td><td>62</td><td>1090</td><td>617</td><td>545</td><td>130</td><td class="drate">3.83</td><td>1.31</td></tr>
        <tr><td>2</td><td>KT</td><td>144</td><td>79</td><td>62</td><td class="">39</td><td>61</td><td>0.560</td><td>1287</td><td>1326</td><td>83</td><td>413</td><td>50</td><td>968</td><td>616</td><td>564</td><td>99</td><td class="drate">3.94</td><td>1.35</td></tr>
        <tr><td>3</td><td>LG</td><td>144</td><td>86</td><td>56</td><td class="">37</td><td>92</td><td>0.606</td><td>1293 ⅓</td><td>1266</td><td>74</td><td>491</td><td>76</td><td>977</td><td>610</td><td>532</td><td>128</td><td class="drate">3.70</td><td>1.36</td></tr>
        <tr><td>4</td><td>두산</td><td>144</td><td>74</td><td>68</td><td class="">41</td><td>70</td><td>0.521</td><td>1284 ⅔</td><td>1245</td><td>90</td><td>501</td><td>82</td><td>1013</td><td>625</td><td>561</td><td>114</td><td class="drate">3.93</td><td>1.36</td></tr>
        <tr><td>5</td><td>한화</td><td>144</td><td>58</td><td>80</td><td class="">20</td><td>68</td><td>0.420</td><td>1291 ⅔</td><td>1292</td><td>101</td><td>518</td><td>103</td><td>1037</td><td>708</td><td>628</td><td>109</td><td class="drate">4.38</td><td>1.4</td></tr>
        <tr><td>6</td><td>KIA</td><td>144</td><td>73</td><td>69</td><td class="">33</td><td>66</td><td>0.514</td><td>1269</td><td>1244</td><td>89</td><td>564</td><td>59</td><td>980</td><td>650</td><td>584</td><td>102</td><td class="drate">4.14</td><td>1.42</td></tr>
        <tr><td>7</td><td>키움</td><td>144</td><td>58</td><td>83</td><td class="">33</td><td>61</td><td>0.411</td><td>1288 ⅓</td><td>1340</td><td>84</td><td>532</td><td>63</td><td>962</td><td>710</td><td>633</td><td>114</td><td class="drate">4.42</td><td>1.45</td></tr>
        <tr><td>8</td><td>롯데</td><td>144</td><td>68</td><td>76</td><td class="">35</td><td>82</td><td>0.472</td><td>1272 ⅓</td><td>1328</td><td>80</td><td>532</td><td>82</td><td>1070</td><td>660</td><td>586</td><td>103</td><td class="drate">4.15</td><td>1.46</td></tr>
        <tr><td>9</td><td>삼성</td><td>144</td><td>61</td><td>82</td><td class="">38</td><td>69</td><td>0.427</td><td>1278 ⅓</td><td>1414</td><td>120</td><td>464</td><td>52</td><td>899</td><td>728</td><td>656</td><td>103</td><td class="drate">4.62</td><td>1.47</td></tr>
        <tr><td>10</td><td>SSG</td><td>144</td><td>76</td><td>65</td><td class="">46</td><td>71</td><td>0.539</td><td>1288 ⅓</td><td>1354</td><td>104</td><td>612</td><td>67</td><td>974</td><td>698</td><td>626</td><td>119</td><td class="drate">4.37</td><td>1.53</td></tr>
      </tbody>
    </table>
  `,
"2022": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr><td>1</td><td>KT</td><td>144</td><td>80</td><td>62</td><td class="">37</td><td>65</td><td>0.563</td><td>1287 ⅓</td><td>1243</td><td>92</td><td>364</td><td>63</td><td>1074</td><td>562</td><td>509</td><td>97</td><td class="drate">3.56</td><td>1.25</td></tr>
        <tr><td>2</td><td>LG</td><td>144</td><td>87</td><td>55</td><td class="">43</td><td>107</td><td>0.613</td><td>1288</td><td>1179</td><td>94</td><td>451</td><td>59</td><td>1031</td><td>521</td><td>476</td><td>89</td><td class="drate">3.33</td><td>1.27</td></tr>
        <tr><td>3</td><td>SSG</td><td>144</td><td>88</td><td>52</td><td class="">45</td><td>68</td><td>0.629</td><td>1301 ⅓</td><td>1223</td><td>130</td><td>457</td><td>65</td><td>1023</td><td>622</td><td>564</td><td>109</td><td class="drate">3.90</td><td>1.29</td></tr>
        <tr><td>4</td><td>키움</td><td>144</td><td>80</td><td>62</td><td class="">48</td><td>84</td><td>0.563</td><td>1296 ⅓</td><td>1247</td><td>96</td><td>490</td><td>70</td><td>1010</td><td>610</td><td>548</td><td>118</td><td class="drate">3.80</td><td>1.34</td></tr>
        <tr class="topteam"><td>5</td><td>NC</td><td>144</td><td>67</td><td>74</td><td class="">25</td><td>54</td><td>0.475</td><td>1286 ⅔</td><td>1230</td><td>111</td><td>515</td><td>98</td><td>1168</td><td>642</td><td>559</td><td>127</td><td class="drate">3.91</td><td>1.36</td></tr>
        <tr><td>6</td><td>KIA</td><td>144</td><td>70</td><td>73</td><td class="">38</td><td>74</td><td>0.489</td><td>1279 ⅔</td><td>1286</td><td>120</td><td>526</td><td>67</td><td>1042</td><td>679</td><td>599</td><td>107</td><td class="drate">4.21</td><td>1.42</td></tr>
        <tr><td>7</td><td>삼성</td><td>144</td><td>66</td><td>76</td><td class="">34</td><td>71</td><td>0.465</td><td>1287</td><td>1370</td><td>129</td><td>478</td><td>66</td><td>971</td><td>695</td><td>620</td><td>118</td><td class="drate">4.34</td><td>1.44</td></tr>
        <tr><td>8</td><td>롯데</td><td>144</td><td>64</td><td>76</td><td class="">34</td><td>69</td><td>0.457</td><td>1280 ⅔</td><td>1373</td><td>84</td><td>492</td><td>80</td><td>1199</td><td>712</td><td>637</td><td>114</td><td class="drate">4.48</td><td>1.46</td></tr>
        <tr><td>9</td><td>두산</td><td>144</td><td>60</td><td>82</td><td class="">32</td><td>68</td><td>0.422</td><td>1279 ⅓</td><td>1336</td><td>117</td><td>555</td><td>70</td><td>977</td><td>721</td><td>634</td><td>117</td><td class="drate">4.46</td><td>1.48</td></tr>
        <tr><td>10</td><td>한화</td><td>144</td><td>46</td><td>96</td><td class="">25</td><td>81</td><td>0.324</td><td>1268 ⅓</td><td>1314</td><td>112</td><td>602</td><td>83</td><td>974</td><td>759</td><td>680</td><td>134</td><td class="drate">4.83</td><td>1.51</td></tr>
      </tbody>
    </table>
  `,
"2021": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr><td>1</td><td>LG</td><td>144</td><td>72</td><td>58</td><td class="">32</td><td>81</td><td>0.554</td><td>1272 ⅓</td><td>1126</td><td>80</td><td>545</td><td>98</td><td>1068</td><td>561</td><td>508</td><td>91</td><td class="drate">3.59</td><td>1.31</td></tr>
        <tr><td>2</td><td>KT</td><td>144</td><td>76</td><td>59</td><td class="">33</td><td>74</td><td>0.563</td><td>1264</td><td>1176</td><td>86</td><td>489</td><td>42</td><td>1062</td><td>584</td><td>518</td><td>112</td><td class="drate">3.69</td><td>1.32</td></tr>
        <tr><td>3</td><td>삼성</td><td>144</td><td>76</td><td>59</td><td class="">46</td><td>80</td><td>0.563</td><td>1259</td><td>1297</td><td>131</td><td>530</td><td>51</td><td>1038</td><td>658</td><td>601</td><td>88</td><td class="drate">4.30</td><td>1.45</td></tr>
        <tr><td>4</td><td>키움</td><td>144</td><td>70</td><td>67</td><td class="">30</td><td>56</td><td>0.511</td><td>1263 ⅓</td><td>1281</td><td>101</td><td>566</td><td>80</td><td>900</td><td>700</td><td>606</td><td>129</td><td class="drate">4.32</td><td>1.46</td></tr>
        <tr class="topteam"><td>5</td><td>NC</td><td>144</td><td>67</td><td>68</td><td class="">33</td><td>80</td><td>0.496</td><td>1256 ⅔</td><td>1268</td><td>125</td><td>592</td><td>77</td><td>1055</td><td>697</td><td>634</td><td>111</td><td class="drate">4.54</td><td>1.48</td></tr>
        <tr><td>6</td><td>두산</td><td>144</td><td>71</td><td>65</td><td class="">28</td><td>61</td><td>0.522</td><td>1269 ⅓</td><td>1295</td><td>104</td><td>587</td><td>73</td><td>1045</td><td>656</td><td>601</td><td>89</td><td class="drate">4.26</td><td>1.48</td></tr>
        <tr><td>7</td><td>한화</td><td>144</td><td>49</td><td>83</td><td class="">21</td><td>62</td><td>0.371</td><td>1258 ⅔</td><td>1208</td><td>115</td><td>673</td><td>101</td><td>1011</td><td>739</td><td>654</td><td>120</td><td class="drate">4.68</td><td>1.49</td></tr>
        <tr><td>8</td><td>KIA</td><td>144</td><td>58</td><td>76</td><td class="">36</td><td>94</td><td>0.433</td><td>1269</td><td>1286</td><td>134</td><td>622</td><td>104</td><td>951</td><td>752</td><td>693</td><td>110</td><td class="drate">4.91</td><td>1.5</td></tr>
        <tr><td>9</td><td>SSG</td><td>144</td><td>66</td><td>64</td><td class="">25</td><td>56</td><td>0.508</td><td>1276 ⅔</td><td>1296</td><td>149</td><td>629</td><td>78</td><td>1012</td><td>741</td><td>686</td><td>102</td><td class="drate">4.84</td><td>1.51</td></tr>
        <tr><td>10</td><td>롯데</td><td>144</td><td>65</td><td>71</td><td class="">37</td><td>76</td><td>0.478</td><td>1271</td><td>1333</td><td>133</td><td>659</td><td>87</td><td>1054</td><td>808</td><td>760</td><td>85</td><td class="drate">5.38</td><td>1.57</td></tr>
      </tbody>
    </table>
  `,
"2020": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr><td>1</td><td>키움</td><td>144</td><td>80</td><td>63</td><td class="">42</td><td>81</td><td>0.559</td><td>1280 ⅓</td><td>1336</td><td>126</td><td>446</td><td>73</td><td>950</td><td>692</td><td>625</td><td>112</td><td class="drate">4.39</td><td>1.39</td></tr>
        <tr><td>2</td><td>롯데</td><td>144</td><td>71</td><td>72</td><td class="">25</td><td>59</td><td>0.497</td><td>1277 ⅓</td><td>1351</td><td>143</td><td>447</td><td>58</td><td>1002</td><td>720</td><td>659</td><td>94</td><td class="drate">4.64</td><td>1.41</td></tr>
        <tr><td>3</td><td>LG</td><td>144</td><td>79</td><td>61</td><td class="">29</td><td>67</td><td>0.564</td><td>1292 ⅔</td><td>1344</td><td>123</td><td>493</td><td>86</td><td>1019</td><td>694</td><td>631</td><td>80</td><td class="drate">4.39</td><td>1.42</td></tr>
        <tr class="topteam"><td>4</td><td>NC</td><td>144</td><td>83</td><td>55</td><td class="">31</td><td>88</td><td>0.601</td><td>1296 ⅔</td><td>1292</td><td>153</td><td>547</td><td>79</td><td>1049</td><td>714</td><td>661</td><td>87</td><td class="drate">4.59</td><td>1.42</td></tr>
        <tr><td>5</td><td>KT</td><td>144</td><td>81</td><td>62</td><td class="">33</td><td>71</td><td>0.566</td><td>1290 ⅓</td><td>1357</td><td>118</td><td>523</td><td>59</td><td>848</td><td>715</td><td>654</td><td>102</td><td class="drate">4.56</td><td>1.46</td></tr>
        <tr><td>6</td><td>두산</td><td>144</td><td>79</td><td>61</td><td class="">23</td><td>45</td><td>0.564</td><td>1285 ⅔</td><td>1395</td><td>109</td><td>478</td><td>61</td><td>1046</td><td>695</td><td>628</td><td>85</td><td class="drate">4.40</td><td>1.46</td></tr>
        <tr><td>7</td><td>삼성</td><td>144</td><td>64</td><td>75</td><td class="">25</td><td>80</td><td>0.460</td><td>1272 ⅓</td><td>1330</td><td>151</td><td>542</td><td>67</td><td>931</td><td>745</td><td>676</td><td>102</td><td class="drate">4.78</td><td>1.47</td></tr>
        <tr><td>8</td><td>KIA</td><td>144</td><td>73</td><td>71</td><td class="">33</td><td>79</td><td>0.507</td><td>1270</td><td>1399</td><td>120</td><td>559</td><td>70</td><td>1038</td><td>795</td><td>725</td><td>100</td><td class="drate">5.14</td><td>1.54</td></tr>
        <tr><td>9</td><td>한화</td><td>144</td><td>46</td><td>95</td><td class="">21</td><td>54</td><td>0.326</td><td>1265</td><td>1400</td><td>158</td><td>609</td><td>79</td><td>1019</td><td>820</td><td>744</td><td>100</td><td class="drate">5.29</td><td>1.59</td></tr>
        <tr><td>10</td><td>SSG</td><td>144</td><td>51</td><td>92</td><td class="">20</td><td>53</td><td>0.357</td><td>1259 ⅓</td><td>1343</td><td>162</td><td>670</td><td>84</td><td>953</td><td>846</td><td>783</td><td>99</td><td class="drate">5.60</td><td>1.6</td></tr>
      </tbody>
    </table>
  `,
"2019": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr><td>1</td><td>두산</td><td>144</td><td>88</td><td>55</td><td class="">44</td><td>69</td><td>0.615</td><td>1283 ⅔</td><td>1259</td><td>78</td><td>380</td><td>70</td><td>860</td><td>550</td><td>501</td><td>83</td><td class="drate">3.51</td><td>1.28</td></tr>
        <tr><td>2</td><td>SSG</td><td>144</td><td>88</td><td>55</td><td class="">51</td><td>92</td><td>0.615</td><td>1292 ⅓</td><td>1240</td><td>99</td><td>436</td><td>50</td><td>1092</td><td>546</td><td>503</td><td>87</td><td class="drate">3.50</td><td>1.3</td></tr>
        <tr><td>3</td><td>키움</td><td>144</td><td>86</td><td>57</td><td class="">39</td><td>91</td><td>0.601</td><td>1279</td><td>1293</td><td>61</td><td>371</td><td>58</td><td>984</td><td>572</td><td>513</td><td>99</td><td class="drate">3.61</td><td>1.3</td></tr>
        <tr><td>4</td><td>LG</td><td>144</td><td>79</td><td>64</td><td class="">43</td><td>62</td><td>0.552</td><td>1283 ⅓</td><td>1257</td><td>89</td><td>499</td><td>91</td><td>953</td><td>633</td><td>553</td><td>95</td><td class="drate">3.88</td><td>1.37</td></tr>
        <tr class="topteam"><td>5</td><td>NC</td><td>144</td><td>73</td><td>69</td><td class="">32</td><td>68</td><td>0.514</td><td>1284 ⅓</td><td>1285</td><td>103</td><td>483</td><td>92</td><td>991</td><td>631</td><td>572</td><td>95</td><td class="drate">4.01</td><td>1.38</td></tr>
        <tr><td>6</td><td>KT</td><td>144</td><td>71</td><td>71</td><td class="">37</td><td>59</td><td>0.500</td><td>1277</td><td>1303</td><td>118</td><td>481</td><td>61</td><td>848</td><td>661</td><td>610</td><td>102</td><td class="drate">4.30</td><td>1.4</td></tr>
        <tr><td>7</td><td>삼성</td><td>144</td><td>60</td><td>83</td><td class="">29</td><td>60</td><td>0.420</td><td>1275 ⅓</td><td>1332</td><td>125</td><td>523</td><td>70</td><td>924</td><td>731</td><td>658</td><td>105</td><td class="drate">4.64</td><td>1.45</td></tr>
        <tr><td>8</td><td>KIA</td><td>144</td><td>62</td><td>80</td><td class="">30</td><td>64</td><td>0.437</td><td>1264</td><td>1362</td><td>101</td><td>504</td><td>76</td><td>976</td><td>723</td><td>654</td><td>110</td><td class="drate">4.66</td><td>1.48</td></tr>
        <tr><td>9</td><td>한화</td><td>144</td><td>58</td><td>86</td><td class="">28</td><td>43</td><td>0.403</td><td>1268 ⅔</td><td>1407</td><td>120</td><td>526</td><td>72</td><td>934</td><td>737</td><td>679</td><td>106</td><td class="drate">4.82</td><td>1.52</td></tr>
        <tr><td>10</td><td>롯데</td><td>144</td><td>48</td><td>93</td><td class="">16</td><td>47</td><td>0.340</td><td>1271</td><td>1407</td><td>120</td><td>546</td><td>71</td><td>1033</td><td>764</td><td>687</td><td>114</td><td class="drate">4.86</td><td>1.54</td></tr>
      </tbody>
    </table>
  `,
"2018": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr><td>1</td><td>SSG</td><td>144</td><td>78</td><td>65</td><td class="">29</td><td>63</td><td>0.545</td><td>1274 ⅔</td><td>1353</td><td>189</td><td>425</td><td>74</td><td>1130</td><td>729</td><td>664</td><td>116</td><td class="drate">4.69</td><td>1.39</td></tr>
        <tr><td>2</td><td>키움</td><td>144</td><td>75</td><td>69</td><td class="">32</td><td>72</td><td>0.521</td><td>1282</td><td>1442</td><td>178</td><td>416</td><td>98</td><td>1021</td><td>780</td><td>723</td><td>106</td><td class="drate">5.08</td><td>1.45</td></tr>
        <tr><td>3</td><td>한화</td><td>144</td><td>77</td><td>67</td><td class="">37</td><td>62</td><td>0.535</td><td>1274</td><td>1394</td><td>164</td><td>472</td><td>89</td><td>1124</td><td>761</td><td>701</td><td>99</td><td class="drate">4.95</td><td>1.46</td></tr>
        <tr><td>4</td><td>두산</td><td>144</td><td>93</td><td>51</td><td class="">41</td><td>56</td><td>0.646</td><td>1288 ⅔</td><td>1401</td><td>154</td><td>476</td><td>109</td><td>1025</td><td>756</td><td>716</td><td>77</td><td class="drate">5.00</td><td>1.46</td></tr>
        <tr><td>5</td><td>LG</td><td>144</td><td>68</td><td>75</td><td class="">29</td><td>43</td><td>0.475</td><td>1268 ⅔</td><td>1434</td><td>159</td><td>453</td><td>89</td><td>1058</td><td>816</td><td>750</td><td>100</td><td class="drate">5.32</td><td>1.49</td></tr>
        <tr><td>6</td><td>삼성</td><td>144</td><td>68</td><td>72</td><td class="">33</td><td>56</td><td>0.486</td><td>1285 ⅓</td><td>1477</td><td>185</td><td>441</td><td>107</td><td>1114</td><td>802</td><td>745</td><td>79</td><td class="drate">5.22</td><td>1.49</td></tr>
        <tr><td>7</td><td>롯데</td><td>144</td><td>68</td><td>74</td><td class="">29</td><td>64</td><td>0.479</td><td>1283 ⅔</td><td>1410</td><td>166</td><td>548</td><td>73</td><td>1164</td><td>846</td><td>771</td><td>117</td><td class="drate">5.41</td><td>1.53</td></tr>
        <tr><td>8</td><td>KIA</td><td>144</td><td>70</td><td>74</td><td class="">26</td><td>43</td><td>0.486</td><td>1270 ⅔</td><td>1511</td><td>181</td><td>445</td><td>69</td><td>1017</td><td>826</td><td>766</td><td>94</td><td class="drate">5.43</td><td>1.54</td></tr>
        <tr><td>9</td><td>KT</td><td>144</td><td>59</td><td>82</td><td class="">24</td><td>45</td><td>0.418</td><td>1274 ⅓</td><td>1580</td><td>194</td><td>409</td><td>84</td><td>1025</td><td>834</td><td>760</td><td>99</td><td class="drate">5.37</td><td>1.56</td></tr>
        <tr class="topteam"><td>10</td><td>NC</td><td>144</td><td>58</td><td>85</td><td class="">24</td><td>51</td><td>0.406</td><td>1264</td><td>1443</td><td>186</td><td>537</td><td>68</td><td>1010</td><td>844</td><td>773</td><td>107</td><td class="drate">5.50</td><td>1.57</td></tr>
      </tbody>
    </table>
  `,
"2017": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr><td>1</td><td>LG</td><td>144</td><td>69</td><td>72</td><td class="">32</td><td>66</td><td>0.489</td><td>1279</td><td>1305</td><td>124</td><td>379</td><td>102</td><td>1040</td><td>677</td><td>614</td><td>103</td><td class="drate">4.32</td><td>1.32</td></tr>
        <tr class="topteam"><td>2</td><td>NC</td><td>144</td><td>79</td><td>62</td><td class="">32</td><td>51</td><td>0.560</td><td>1284 ⅔</td><td>1342</td><td>169</td><td>470</td><td>93</td><td>1097</td><td>745</td><td>673</td><td>108</td><td class="drate">4.71</td><td>1.41</td></tr>
        <tr><td>3</td><td>롯데</td><td>144</td><td>80</td><td>62</td><td class="">39</td><td>59</td><td>0.563</td><td>1287 ⅓</td><td>1357</td><td>162</td><td>477</td><td>79</td><td>1096</td><td>701</td><td>653</td><td>86</td><td class="drate">4.57</td><td>1.42</td></tr>
        <tr><td>4</td><td>두산</td><td>144</td><td>84</td><td>57</td><td class="">35</td><td>46</td><td>0.596</td><td>1288</td><td>1405</td><td>125</td><td>464</td><td>87</td><td>956</td><td>678</td><td>627</td><td>90</td><td class="drate">4.38</td><td>1.45</td></tr>
        <tr><td>5</td><td>키움</td><td>144</td><td>69</td><td>73</td><td class="">40</td><td>66</td><td>0.486</td><td>1271</td><td>1488</td><td>149</td><td>388</td><td>97</td><td>1005</td><td>764</td><td>714</td><td>91</td><td class="drate">5.06</td><td>1.48</td></tr>
        <tr><td>6</td><td>한화</td><td>144</td><td>61</td><td>81</td><td class="">31</td><td>49</td><td>0.430</td><td>1273</td><td>1474</td><td>166</td><td>446</td><td>100</td><td>914</td><td>820</td><td>749</td><td>91</td><td class="drate">5.30</td><td>1.51</td></tr>
        <tr><td>7</td><td>KIA</td><td>144</td><td>87</td><td>56</td><td class="">33</td><td>46</td><td>0.608</td><td>1290</td><td>1518</td><td>137</td><td>434</td><td>77</td><td>985</td><td>743</td><td>691</td><td>98</td><td class="drate">4.82</td><td>1.51</td></tr>
        <tr><td>8</td><td>SSG</td><td>144</td><td>75</td><td>68</td><td class="">30</td><td>64</td><td>0.524</td><td>1270 ⅔</td><td>1443</td><td>154</td><td>481</td><td>105</td><td>940</td><td>767</td><td>710</td><td>108</td><td class="drate">5.03</td><td>1.51</td></tr>
        <tr><td>9</td><td>KT</td><td>144</td><td>50</td><td>94</td><td class="">22</td><td>41</td><td>0.347</td><td>1256</td><td>1524</td><td>174</td><td>433</td><td>95</td><td>913</td><td>876</td><td>806</td><td>112</td><td class="drate">5.78</td><td>1.56</td></tr>
        <tr><td>10</td><td>삼성</td><td>144</td><td>55</td><td>84</td><td class="">27</td><td>34</td><td>0.396</td><td>1281 ⅓</td><td>1541</td><td>187</td><td>548</td><td>118</td><td>1063</td><td>911</td><td>840</td><td>95</td><td class="drate">5.90</td><td>1.63</td></tr>
      </tbody>
    </table>
  `,
"2016": `
    <table>
      <thead>
      <th>순위</th><th>팀명</th><th>경기</th><th>승</th><th>패</th><th>세</th><th>홀드</th><th>승률</th><th>이닝</th><th>피안타</th><th>피홈런</th><th>볼넷</th><th>사구</th><th>삼진</th><th>실점</th><th>자책점</th><th>실책</th><th>평균자책점</th><th>출루허용</th></thead>
      <tbody>
        <tr class="topteam"><td>1</td><td>NC</td><td>144</td><td>83</td><td>58</td><td class="">36</td><td>62</td><td>0.589</td><td>1286 ⅓</td><td>1314</td><td>137</td><td>516</td><td>86</td><td>1147</td><td>690</td><td>642</td><td>100</td><td class="drate">4.49</td><td>1.42</td></tr>
        <tr><td>2</td><td>두산</td><td>144</td><td>93</td><td>50</td><td class="">36</td><td>55</td><td>0.650</td><td>1287 ⅔</td><td>1385</td><td>136</td><td>498</td><td>77</td><td>982</td><td>682</td><td>638</td><td>79</td><td class="drate">4.46</td><td>1.46</td></tr>
        <tr><td>3</td><td>SSG</td><td>144</td><td>69</td><td>75</td><td class="">31</td><td>43</td><td>0.479</td><td>1274</td><td>1386</td><td>151</td><td>527</td><td>76</td><td>945</td><td>784</td><td>699</td><td>123</td><td class="drate">4.94</td><td>1.5</td></tr>
        <tr><td>4</td><td>키움</td><td>144</td><td>77</td><td>66</td><td class="">38</td><td>74</td><td>0.538</td><td>1280 ⅓</td><td>1487</td><td>152</td><td>435</td><td>68</td><td>895</td><td>757</td><td>705</td><td>94</td><td class="drate">4.96</td><td>1.5</td></tr>
        <tr><td>5</td><td>LG</td><td>144</td><td>71</td><td>71</td><td class="">34</td><td>75</td><td>0.500</td><td>1287 ⅔</td><td>1426</td><td>122</td><td>539</td><td>109</td><td>909</td><td>807</td><td>729</td><td>103</td><td class="drate">5.10</td><td>1.53</td></tr>
        <tr><td>6</td><td>KIA</td><td>144</td><td>70</td><td>73</td><td class="">38</td><td>74</td><td>0.489</td><td>1276</td><td>1456</td><td>131</td><td>561</td><td>59</td><td>965</td><td>785</td><td>708</td><td>111</td><td class="drate">4.99</td><td>1.58</td></tr>
        <tr><td>7</td><td>삼성</td><td>144</td><td>65</td><td>78</td><td class="">34</td><td>60</td><td>0.455</td><td>1282 ⅓</td><td>1507</td><td>193</td><td>518</td><td>87</td><td>935</td><td>869</td><td>804</td><td>90</td><td class="drate">5.64</td><td>1.58</td></tr>
        <tr><td>8</td><td>롯데</td><td>144</td><td>66</td><td>78</td><td class="">27</td><td>59</td><td>0.458</td><td>1266 ⅓</td><td>1486</td><td>161</td><td>585</td><td>78</td><td>1009</td><td>865</td><td>792</td><td>91</td><td class="drate">5.63</td><td>1.64</td></tr>
        <tr><td>9</td><td>한화</td><td>144</td><td>66</td><td>75</td><td class="">24</td><td>39</td><td>0.468</td><td>1292 ⅔</td><td>1520</td><td>155</td><td>634</td><td>76</td><td>976</td><td>908</td><td>828</td><td>124</td><td class="drate">5.76</td><td>1.67</td></tr>
        <tr><td>10</td><td>KT</td><td>144</td><td>53</td><td>89</td><td class="">27</td><td>48</td><td>0.373</td><td>1273</td><td>1593</td><td>145</td><td>560</td><td>84</td><td>980</td><td>927</td><td>839</td><td>130</td><td class="drate">5.93</td><td>1.69</td></tr>
      </tbody>
    </table>
  `,
};

// 상대전적 기록
const matchData = {
  "2025": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>9-0-7</td><td>7-0-9</td><td>8-0-8</td><td>9-2-5</td><td>9-1-6</td><td>6-1-9</td><td>8-0-8</td><td>6-1-9</td><td>9-1-6</td></tr>
        <tr><td>KIA</td><td>7-0-9</td><td>-</td><td>8-0-8</td><td>5-0-11</td><td>9-1-6</td><td>8-0-8</td><td>8-1-7</td><td>8-0-8</td><td>4-0-12</td><td>8-2-6</td></tr>
        <tr><td>삼성</td><td>9-0-7</td><td>8-0-8</td><td>-</td><td>7-0-9</td><td>10-0-6</td><td>5-0-11</td><td>8-1-7</td><td>7-1-8</td><td>8-0-8</td><td>12-0-4</td></tr>
        <tr><td>LG</td><td>8-0-8</td><td>11-0-5</td><td>9-0-7</td><td>-</td><td>9-0-7</td><td>11-0-5</td><td>10-0-6</td><td>10-2-4</td><td>8-1-7</td><td>9-0-7</td></tr>
        <tr><td>두산</td><td>5-2-9</td><td>6-1-9</td><td>6-0-10</td><td>7-0-9</td><td>-</td><td>4-1-11</td><td>6-0-10</td><td>8-1-7</td><td>9-1-6</td><td>10-0-6</td></tr>
        <tr><td>KT</td><td>6-1-9</td><td>8-0-8</td><td>11-0-5</td><td>5-0-11</td><td>11-1-4</td><td>-</td><td>7-0-9</td><td>6-2-8</td><td>6-1-9</td><td>11-0-5</td></tr>
        <tr><td>SSG</td><td>9-1-6</td><td>7-1-8</td><td>7-1-8</td><td>6-0-10</td><td>10-0-6</td><td>9-0-7</td><td>-</td><td>10-0-6</td><td>8-0-8</td><td>9-1-6</td></tr>
        <tr><td>롯데</td><td>8-0-8</td><td>8-0-8</td><td>8-1-7</td><td>4-2-10</td><td>7-1-8</td><td>8-2-6</td><td>6-0-10</td><td>-</td><td>6-0-10</td><td>11-0-5</td></tr>
        <tr><td>한화</td><td>9-1-6</td><td>12-0-4</td><td>8-0-8</td><td>7-1-8</td><td>6-1-9</td><td>9-1-6</td><td>8-0-8</td><td>8-0-6</td><td>-</td><td>14-0-2</td></tr>
        <tr><td>키움</td><td>6-1-9</td><td>6-2-8</td><td>4-0-12</td><td>7-0-9</td><td>6-0-10</td><td>5-0-11</td><td>6-1-9</td><td>5-0-11</td><td>2-0-14</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2024": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>4-0-12</td><td>6-0-10</td><td>4-0-12</td><td>4-0-12</td><td>6-0-10</td><td>11-0-5</td><td>7-0-9</td><td>10-2-4</td><td>9-0-7</td></tr>
        <tr><td>KIA</td><td>12-0-4</td><td>-</td><td>12-0-4</td><td>13-0-3</td><td>6-1-9</td><td>9-0-7</td><td>6-0-10</td><td>7-1-8</td><td>11-0-5</td><td>11-0-5</td></tr>
        <tr><td>삼성</td><td>10-0-6</td><td>4-0-12</td><td>-</td><td>8-1-7</td><td>12-0-4</td><td>7-1-8</td><td>7-0-9</td><td>10-0-6</td><td>10-0-6</td><td>10-0-6</td></tr>
        <tr><td>LG</td><td>12-0-4</td><td>3-0-13</td><td>7-1-8</td><td>-</td><td>9-0-7</td><td>9-0-7</td><td>11-1-4</td><td>11-0-5</td><td>8-0-8</td><td>6-0-10</td></tr>
        <tr><td>두산</td><td>12-0-4</td><td>9-1-6</td><td>4-0-12</td><td>7-0-9</td><td>-</td><td>12-0-4</td><td>7-0-9</td><td>7-1-8</td><td>10-0-10</td><td>10-1-6</td></tr>
        <tr><td>KT</td><td>10-0-6</td><td>7-0-9</td><td>8-1-7</td><td>7-0-9</td><td>4-0-12</td><td>-</td><td>8-0-8</td><td>8-1-7</td><td>6-0-10</td><td>14-0-2</td></tr>
        <tr><td>SSG</td><td>5-0-11</td><td>10-0-6</td><td>9-0-7</td><td>4-1-11</td><td>9-0-7</td><td>8-0-8</td><td>-</td><td>9-1-6</td><td>10-0-10</td><td>12-0-4</td></tr>
        <tr><td>롯데</td><td>9-0-7</td><td>8-1-7</td><td>8-1-7</td><td>5-0-11</td><td>8-1-7</td><td>7-1-8</td><td>6-1-9</td><td>-</td><td>9-0-7</td><td>8-0-8</td></tr>
        <tr><td>한화</td><td>4-2-10</td><td>5-0-11</td><td>6-0-10</td><td>8-0-8</td><td>10-0-10</td><td>6-0-10</td><td>7-0-9</td><td>7-0-9</td><td>-</td><td>6-0-10</td></tr>
        <tr><td>키움</td><td>7-0-9</td><td>5-0-11</td><td>6-0-10</td><td>10-0-6</td><td>10-0-6</td><td>2-0-14</td><td>4-0-12</td><td>8-0-8</td><td>10-0-6</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2023": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>6-1-9</td><td>8-0-8</td><td>10-0-6</td><td>8-0-8</td><td>6-0-10</td><td>8-0-8</td><td>9-0-7</td><td>9-1-6</td><td>11-0-5</td></tr>
        <tr><td>KIA</td><td>9-1-6</td><td>-</td><td>11-0-5</td><td>9-0-7</td><td>4-0-12</td><td>10-0-6</td><td>7-0-9</td><td>8-0-8</td><td>8-1-7</td><td>7-0-9</td></tr>
        <tr><td>삼성</td><td>8-0-8</td><td>5-0-11</td><td>-</td><td>6-0-10</td><td>5-0-11</td><td>8-0-8</td><td>7-0-9</td><td>9-0-9</td><td>8-0-8</td><td>7-1-8</td></tr>
        <tr><td>LG</td><td>6-0-10</td><td>7-0-9</td><td>10-0-6</td><td>-</td><td>11-0-5</td><td>10-0-6</td><td>12-0-4</td><td>10-0-6</td><td>9-1-6</td><td>11-1-4</td></tr>
        <tr><td>두산</td><td>8-0-8</td><td>12-0-4</td><td>11-0-5</td><td>5-0-11</td><td>-</td><td>5-1-10</td><td>4-1-11</td><td>7-1-8</td><td>10-1-6</td><td>12-0-4</td></tr>
        <tr><td>KT</td><td>10-0-6</td><td>6-0-10</td><td>8-0-8</td><td>10-0-6</td><td>10-1-5</td><td>-</td><td>10-1-5</td><td>9-0-3</td><td>9-1-6</td><td>7-0-9</td></tr>
        <tr><td>SSG</td><td>8-0-8</td><td>9-0-7</td><td>9-0-7</td><td>4-0-12</td><td>11-1-4</td><td>5-1-10</td><td>-</td><td>8-0-8</td><td>10-1-5</td><td>12-0-4</td></tr>
        <tr><td>롯데</td><td>9-0-7</td><td>8-0-8</td><td>9-0-7</td><td>6-0-10</td><td>9-0-7</td><td>3-0-13</td><td>8-0-8</td><td>-</td><td>10-0-6</td><td>8-0-8</td></tr>
        <tr><td>한화</td><td>6-1-9</td><td>7-1-8</td><td>8-0-8</td><td>9-1-6</td><td>6-1-9</td><td>6-1-9</td><td>5-1-10</td><td>10-0-6</td><td>-</td><td>8-1-7</td></tr>
        <tr><td>키움</td><td>5-0-11</td><td>9-0-7</td><td>8-1-7</td><td>4-1-11</td><td>4-0-12</td><td>9-0-7</td><td>4-0-12</td><td>8-0-8</td><td>7-1-8</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2022": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>7-0-9</td><td>10-0-6</td><td>6-0-10</td><td>8-0-8</td><td>8-0-8</td><td>7-1-8</td><td>8-0-8</td><td>9-1-6</td><td>4-1-11</td></tr>
        <tr><td>KIA</td><td>9-0-7</td><td>-</td><td>6-0-10</td><td>6-0-10</td><td>9-0-7</td><td>5-1-10</td><td>5-0-11</td><td>12-0-4</td><td>12-0-4</td><td>6-0-10</td></tr>
        <tr><td>삼성</td><td>6-0-10</td><td>10-0-6</td><td>-</td><td>4-0-12</td><td>11-0-5</td><td>5-0-11</td><td>5-0-11</td><td>8-1-7</td><td>12-1-3</td><td>5-0-11</td></tr>
        <tr><td>LG</td><td>10-0-6</td><td>10-0-6</td><td>12-0-4</td><td>-</td><td>10-0-6</td><td>9-0-7</td><td>7-1-8</td><td>7-1-8</td><td>12-0-4</td><td>10-0-6</td></tr>
        <tr><td>두산</td><td>8-0-8</td><td>7-0-9</td><td>5-0-11</td><td>6-0-10</td><td>-</td><td>4-0-12</td><td>4-1-11</td><td>8-1-7</td><td>9-0-7</td><td>9-0-7</td></tr>
        <tr><td>KT</td><td>8-0-8</td><td>10-1-5</td><td>11-0-5</td><td>7-0-9</td><td>12-0-4</td><td>-</td><td>8-0-8</td><td>9-0-7</td><td>9-1-8</td><td>7-0-9</td></tr>
        <tr><td>SSG</td><td>8-1-7</td><td>11-0-5</td><td>11-0-5</td><td>8-1-7</td><td>11-1-4</td><td>8-0-8</td><td>-</td><td>10-1-5</td><td>10-0-6</td><td>11-0-5</td></tr>
        <tr><td>롯데</td><td>8-0-8</td><td>4-0-12</td><td>7-1-8</td><td>8-1-7</td><td>7-1-8</td><td>7-0-9</td><td>5-1-10</td><td>-</td><td>12-0-4</td><td>6-0-10</td></tr>
        <tr><td>한화</td><td>6-1-9</td><td>4-0-12</td><td>3-1-12</td><td>4-0-12</td><td>7-0-9</td><td>8-0-8</td><td>6-0-10</td><td>4-0-12</td><td>-</td><td>4-0-12</td></tr>
        <tr><td>키움</td><td>11-1-4</td><td>10-0-6</td><td>11-0-5</td><td>10-0-6</td><td>7-0-9</td><td>8-1-7</td><td>5-0-11</td><td>10-0-6</td><td>12-0-4</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2021": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>12-0-4</td><td>5-0-11</td><td>8-0-8</td><td>6-0-10</td><td>7-2-7</td><td>8-3-5</td><td>7-2-7</td><td>9-2-5</td><td>5-0-11</td></tr>
        <tr><td>KIA</td><td>4-0-12</td><td>-</td><td>5-0-11</td><td>6-1-9</td><td>5-2-9</td><td>6-2-8</td><td>6-1-9</td><td>9-1-6</td><td>10-3-3</td><td>7-0-9</td></tr>
        <tr><td>삼성</td><td>11-0-5</td><td>11-0-5</td><td>-</td><td>6-2-8</td><td>7-0-9</td><td>9-1-6</td><td>6-4-6</td><td>8-0-8</td><td>10-2-4</td><td>8-0-8</td></tr>
        <tr><td>LG</td><td>8-0-8</td><td>9-1-6</td><td>8-2-6</td><td>-</td><td>6-3-7</td><td>6-2-8</td><td>6-1-9</td><td>9-2-5</td><td>11-1-4</td><td>9-2-5</td></tr>
        <tr><td>두산</td><td>10-0-6</td><td>9-2-5</td><td>9-0-7</td><td>7-3-6</td><td>-</td><td>7-0-9</td><td>8-1-7</td><td>5-1-10</td><td>9-0-7</td><td>7-1-8</td></tr>
        <tr><td>KT</td><td>7-2-7</td><td>8-2-6</td><td>6-1-9</td><td>8-2-6</td><td>9-0-7</td><td>-</td><td>12-2-2</td><td>10-1-9</td><td>11-0-5</td><td>8-0-8</td></tr>
        <tr><td>SSG</td><td>5-3-8</td><td>9-1-6</td><td>6-4-6</td><td>9-1-9</td><td>7-1-8</td><td>2-2-12</td><td>-</td><td>10-1-5</td><td>10-0-6</td><td>8-1-7</td></tr>
        <tr><td>롯데</td><td>7-2-7</td><td>6-1-9</td><td>8-0-8</td><td>5-2-9</td><td>10-1-5</td><td>9-0-7</td><td>5-1-10</td><td>-</td><td>7-1-8</td><td>8-0-8</td></tr>
        <tr><td>한화</td><td>5-2-9</td><td>3-3-10</td><td>4-2-10</td><td>4-1-11</td><td>7-0-9</td><td>5-0-11</td><td>6-0-10</td><td>7-1-7</td><td>-</td><td>7-3-6</td></tr>
        <tr><td>키움</td><td>11-0-5</td><td>9-0-7</td><td>8-0-8</td><td>5-2-9</td><td>8-1-7</td><td>8-0-8</td><td>7-1-8</td><td>8-0-8</td><td>6-3-7</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2020": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>7-0-9</td><td>9-2-5</td><td>4-3-9</td><td>9-0-7</td><td>10-1-5</td><td>14-0-2</td><td>10-0-6</td><td>12-0-4</td><td>8-0-8</td></tr>
        <tr><td>KIA</td><td>9-0-7</td><td>-</td><td>10-0-6</td><td>5-0-11</td><td>3-0-13</td><td>7-0-9</td><td>9-0-7</td><td>10-0-6</td><td>11-0-5</td><td>9-0-7</td></tr>
        <tr><td>삼성</td><td>5-2-9</td><td>6-0-10</td><td>-</td><td>9-0-7</td><td>8-1-7</td><td>4-0-12</td><td>9-0-7</td><td>8-0-8</td><td>8-2-6</td><td>7-0-9</td></tr>
        <tr><td>LG</td><td>9-3-4</td><td>11-0-5</td><td>7-0-9</td><td>-</td><td>6-1-9</td><td>9-0-7</td><td>13-0-3</td><td>7-0-9</td><td>11-0-5</td><td>6-0-10</td></tr>
        <tr><td>두산</td><td>7-0-9</td><td>13-0-3</td><td>7-1-8</td><td>9-1-6</td><td>-</td><td>7-0-9</td><td>12-0-4</td><td>9-1-6</td><td>9-0-7</td><td>6-1-9</td></tr>
        <tr><td>KT</td><td>5-1-10</td><td>9-0-7</td><td>12-0-4</td><td>7-0-9</td><td>9-0-7</td><td>-</td><td>13-0-3</td><td>7-0-9</td><td>11-0-5</td><td>8-0-8</td></tr>
        <tr><td>SSG</td><td>2-0-14</td><td>7-0-9</td><td>7-0-9</td><td>3-0-13</td><td>4-0-12</td><td>3-0-13</td><td>-</td><td>8-0-8</td><td>11-1-4</td><td>6-0-10</td></tr>
        <tr><td>롯데</td><td>6-0-10</td><td>6-0-10</td><td>8-0-8</td><td>9-0-7</td><td>6-1-9</td><td>9-0-7</td><td>8-0-8</td><td>-</td><td>11-0-5</td><td>8-0-8</td></tr>
        <tr><td>한화</td><td>4-0-12</td><td>5-0-11</td><td>6-2-8</td><td>5-0-11</td><td>7-0-9</td><td>5-0-11</td><td>4-1-11</td><td>5-0-11</td><td>-</td><td>5-0-11</td></tr>
        <tr><td>키움</td><td>8-0-8</td><td>7-0-9</td><td>9-0-7</td><td>10-0-6</td><td>9-0-6</td><td>8-0-8</td><td>10-0-6</td><td>8-0-8</td><td>11-0-5</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2019": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>9-0-7</td><td>6-1-9</td><td>8-0-8</td><td>7-1-8</td><td>10-0-6</td><td>7-0-9</td><td>11-0-5</td><td>9-0-7</td><td>6-0-10</td></tr>
        <tr><td>KIA</td><td>7-0-9</td><td>-</td><td>8-0-8</td><td>6-0-10</td><td>3-0-13</td><td>4-0-12</td><td>8-1-7</td><td>9-0-7</td><td>12-0-4</td><td>5-1-10</td></tr>
        <tr><td>삼성</td><td>9-1-6</td><td>8-0-8</td><td>-</td><td>6-0-10</td><td>3-0-13</td><td>7-0-9</td><td>4-0-12</td><td>7-0-9</td><td>10-0-6</td><td>6-0-10</td></tr>
        <tr><td>LG</td><td>8-0-8</td><td>10-0-6</td><td>10-0-6</td><td>-</td><td>6-0-10</td><td>13-0-3</td><td>6-0-10</td><td>10-1-5</td><td>9-0-7</td><td>7-0-9</td></tr>
        <tr><td>두산</td><td>8-1-7</td><td>13-0-3</td><td>13-0-3</td><td>10-0-6</td><td>-</td><td>7-0-9</td><td>9-0-7</td><td>11-0-5</td><td>10-1-6</td><td>7-0-9</td></tr>
        <tr><td>KT</td><td>6-0-10</td><td>12-0-4</td><td>9-0-7</td><td>8-0-13</td><td>9-0-7</td><td>-</td><td>6-0-10</td><td>11-2-3</td><td>8-0-8</td><td>7-0-9</td></tr>
        <tr><td>SSG</td><td>9-0-7</td><td>7-1-8</td><td>12-0-4</td><td>10-0-6</td><td>7-0-9</td><td>10-0-6</td><td>-</td><td>13-0-3</td><td>12-0-4</td><td>8-0-8</td></tr>
        <tr><td>롯데</td><td>5-0-11</td><td>7-0-9</td><td>9-0-7</td><td>5-1-10</td><td>5-0-11</td><td>3-2-11</td><td>3-0-13</td><td>-</td><td>8-0-8</td><td>3-0-13</td></tr>
        <tr><td>한화</td><td>7-0-9</td><td>4-0-12</td><td>6-0-10</td><td>7-0-9</td><td>6-0-10</td><td>8-0-8</td><td>4-0-12</td><td>8-0-8</td><td>-</td><td>8-0-8</td></tr>
        <tr><td>키움</td><td>10-0-6</td><td>10-1-5</td><td>10-0-6</td><td>9-0-7</td><td>9-0-7</td><td>9-0-7</td><td>8-0-8</td><td>13-0-3</td><td>8-0-8</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2018": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>9-0-7</td><td>6-1-9</td><td>8-0-8</td><td>4-0-12</td><td>5-0-11</td><td>5-0-11</td><td>7-0-9</td><td>7-0-9</td><td>7-0-9</td></tr>
        <tr><td>KIA</td><td>7-0-9</td><td>-</td><td>6-0-10</td><td>7-0-9</td><td>8-0-8</td><td>9-0-7</td><td>11-0-5</td><td>6-0-10</td><td>7-0-9</td><td>9-0-7</td></tr>
        <tr><td>삼성</td><td>9-1-6</td><td>10-0-6</td><td>-</td><td>7-0-9</td><td>4-0-12</td><td>7-2-7</td><td>7-1-8</td><td>12-0-4</td><td>7-0-9</td><td>5-0-11</td></tr>
        <tr><td>LG</td><td>8-0-8</td><td>9-0-7</td><td>9-0-7</td><td>-</td><td>6-0-10</td><td>13-0-3</td><td>6-0-10</td><td>8-1-7</td><td>7-0-9</td><td>11-0-5</td></tr>
        <tr><td>두산</td><td>12-0-4</td><td>8-0-8</td><td>12-0-4</td><td>15-0-1</td><td>-</td><td>7-0-9</td><td>8-0-8</td><td>13-0-3</td><td>8-0-8</td><td>8-0-8</td></tr>
        <tr><td>KT</td><td>11-0-5</td><td>7-0-9</td><td>7-2-7</td><td>7-0-9</td><td>7-0-9</td><td>-</td><td>5-0-11</td><td>4-1-11</td><td>6-0-10</td><td>5-0-11</td></tr>
        <tr><td>SSG</td><td>11-0-5</td><td>5-0-11</td><td>8-1-7</td><td>10-0-6</td><td>8-0-8</td><td>11-0-5</td><td>-</td><td>7-0-9</td><td>11-0-5</td><td>9-0-7</td></tr>
        <tr><td>롯데</td><td>9-0-7</td><td>10-0-6</td><td>4-0-12</td><td>7-1-8</td><td>13-0-3</td><td>11-1-4</td><td>9-0-7</td><td>-</td><td>6-0-10</td><td>9-0-7</td></tr>
        <tr><td>한화</td><td>9-0-7</td><td>9-0-7</td><td>9-0-7</td><td>7-0-9</td><td>8-0-8</td><td>10-0-6</td><td>5-0-11</td><td>10-0-6</td><td>-</td><td>8-0-8</td></tr>
        <tr><td>키움</td><td>9-0-7</td><td>7-0-9</td><td>11-0-5</td><td>5-0-11</td><td>8-0-8</td><td>11-0-5</td><td>9-0-7</td><td>7-0-9</td><td>8-0-8</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2017": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>7-0-9</td><td>7-2-7</td><td>11-0-5</td><td>12-0-4</td><td>12-0-4</td><td>9-0-7</td><td>7-0-9</td><td>9-1-6</td><td>12-0-4</td></tr>
        <tr><td>KIA</td><td>9-0-7</td><td>-</td><td>12-0-4</td><td>10-0-6</td><td>9-1-6</td><td>10-0-6</td><td>9-0-7</td><td>9-0-7</td><td>11-0-5</td><td>10-0-6</td></tr>
        <tr><td>삼성</td><td>7-2-7</td><td>4-0-12</td><td>-</td><td>6-0-10</td><td>3-1-12</td><td>8-0-8</td><td>5-0-11</td><td>8-1-7</td><td>9-1-6</td><td>5-0-11</td></tr>
        <tr><td>LG</td><td>5-0-11</td><td>6-0-10</td><td>10-0-6</td><td>-</td><td>6-1-9</td><td>11-0-5</td><td>7-0-9</td><td>7-1-8</td><td>7-0-9</td><td>10-1-5</td></tr>
        <tr><td>두산</td><td>11-0-5</td><td>8-1-7</td><td>12-1-3</td><td>9-1-6</td><td>-</td><td>11-0-5</td><td>8-0-8</td><td>8-0-8</td><td>9-0-7</td><td>8-0-8</td></tr>
        <tr><td>KT</td><td>4-0-12</td><td>6-0-10</td><td>8-0-8</td><td>5-0-11</td><td>5-0-11</td><td>-</td><td>7-0-9</td><td>5-0-11</td><td>4-0-12</td><td>10-0-6</td></tr>
        <tr><td>SSG</td><td>7-0-9</td><td>7-0-9</td><td>11-0-5</td><td>9-0-7</td><td>9-0-7</td><td>9-0-7</td><td>-</td><td>7-0-9</td><td>11-0-5</td><td>6-1-9</td></tr>
        <tr><td>롯데</td><td>9-0-7</td><td>7-0-9</td><td>7-1-8</td><td>8-1-7</td><td>8-0-8</td><td>11-0-5</td><td>9-0-7</td><td>-</td><td>11-0-5</td><td>10-0-6</td></tr>
        <tr><td>한화</td><td>6-1-9</td><td>5-0-11</td><td>6-1-9</td><td>9-0-7</td><td>7-0-9</td><td>12-0-4</td><td>5-0-11</td><td>5-0-11</td><td>-</td><td>6-0-10</td></tr>
        <tr><td>키움</td><td>4-0-12</td><td>6-0-10</td><td>11-0-5</td><td>10-1-5</td><td>8-0-8</td><td>10-0-6</td><td>9-1-6</td><td>6-0-10</td><td>10-0-6</td><td>-</td></tr>
      </tbody>
    </table>
  `,
  "2016": `
    <table>
      <thead>
        <tr><th>-</th><th>NC</th><th>KIA</th><th>삼성</th><th>LG</th><th>두산</th><th>KT</th><th>SSG</th><th>롯데</th><th>한화</th><th>키움</th></tr>
      </thead>
      <tbody>
        <tr class="topteam"><td>NC</td><td>-</td><td>9-0-7</td><td>8-0-8</td><td>9-1-6</td><td>7-0-9</td><td>9-1-6</td><td>10-0-6</td><td>15-0-1</td><td>8-1-7</td><td>8-0-8</td></tr>
        <tr><td>KIA</td><td>7-0-9</td><td>-</td><td>8-0-8</td><td>7-1-8</td><td>5-0-11</td><td>11-0-5</td><td>8-0-8</td><td>10-0-6</td><td>9-0-7</td><td>5-0-11</td></tr>
        <tr><td>삼성</td><td>8-0-8</td><td>8-0-8</td><td>-</td><td>9-0-7</td><td>6-0-10</td><td>8-0-8</td><td>8-0-8</td><td>5-0-11</td><td>5-1-10</td><td>8-0-8</td></tr>
        <tr><td>LG</td><td>6-1-9</td><td>8-1-7</td><td>7-0-9</td><td>-</td><td>9-0-7</td><td>10-0-6</td><td>6-0-10</td><td>8-0-8</td><td>9-0-7</td><td>7-0-6</td></tr>
        <tr><td>두산</td><td>9-0-7</td><td>11-0-5</td><td>10-0-6</td><td>9-0-7</td><td>-</td><td>13-0-3</td><td>12-0-4</td><td>8-0-8</td><td>12-0-4</td><td>9-1-6</td></tr>
        <tr><td>KT</td><td>6-1-9</td><td>5-0-11</td><td>8-0-8</td><td>6-0-10</td><td>3-0-13</td><td>-</td><td>7-0-9</td><td>6-0-10</td><td>8-1-7</td><td>4-0-12</td></tr>
        <tr><td>SSG</td><td>6-0-10</td><td>8-0-8</td><td>8-0-8</td><td>10-0-6</td><td>4-0-12</td><td>9-0-7</td><td>-</td><td>9-0-7</td><td>5-0-11</td><td>10-0-6</td></tr>
        <tr><td>롯데</td><td>1-0-15</td><td>6-0-11</td><td>10-1-5</td><td>8-0-8</td><td>8-0-8</td><td>10-0-6</td><td>7-0-9</td><td>-</td><td>8-0-8</td><td>7-0-9</td></tr>
        <tr><td>한화</td><td>7-1-8</td><td>7-0-9</td><td>10-1-5</td><td>7-0-9</td><td>4-0-12</td><td>7-1-8</td><td>11-0-5</td><td>8-0-8</td><td>-</td><td>5-0-11</td></tr>
        <tr><td>키움</td><td>8-0-8</td><td>11-0-5</td><td>8-0-8</td><td>12-0-4</td><td>9-1-6</td><td>12-0-4</td><td>6-0-10</td><td>9-0-7</td><td>11-0-5</td><td>-</td></tr>
      </tbody>
    </table>
  `,
};

// 연도 변경
function updateTable(selectId, containerId, dataObj) {
  const select = document.getElementById(selectId);
  const container = document.getElementById(containerId);
  const year = select.value;
  container.innerHTML = dataObj[year];
}

updateTable("rankYear", "rankTableContainer", rankData);
updateTable("attackYear", "attackTableContainer", attackData);
updateTable("defenseYear", "defenseTableContainer", defenseData);
updateTable("matchYear", "matchTableContainer", matchData);

document.getElementById("rankYear").addEventListener("change", () => updateTable("rankYear", "rankTableContainer", rankData));
document.getElementById("attackYear").addEventListener("change", () => updateTable("attackYear", "attackTableContainer", attackData));
document.getElementById("defenseYear").addEventListener("change", () => updateTable("defenseYear", "defenseTableContainer", defenseData));
document.getElementById("matchYear").addEventListener("change", () => updateTable("matchYear", "matchTableContainer", matchData));